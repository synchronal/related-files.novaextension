// @related [related.js](/Scripts/related.js)

const { related } = require("related.js");

exports.activate = function () {
  config = readConfig();
};

exports.deactivate = function () {
};

nova.commands.register("related-files.open-related-file", (editor) => {
  const doc = editor.document;
  const contents = doc.getTextInRange(new Range(0, doc.length));
  const files = related(contents, config);

  if (files.length == 0) {
    return;
  } else if (files.length == 1) {
    return openFile(files[0]);
  } else {
    const names = files.map((file) => `${file.name} — ${file.path}`);
    nova.workspace.showChoicePalette(names, {}, (name, index) =>
      openFile(files[index])
    );
  }
});

function openFile(file) {
  if (file) {
    const relativePath = file.path;
    const path = nova.path.join(nova.workspace.path, relativePath).trim();
    nova.workspace.openFile(path);
  }
}

function readConfig() {
  const configFilePath = nova.path.join(nova.workspace.path, "/.config/related-files.json");
  if (nova.fs.stat(configFilePath)) {
    const configFile = nova.fs.open(configFilePath);
    const configFileContents = configFile.read();
    return JSON.parse(configFileContents);
  } else {
    return {};
  }
}
