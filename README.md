<!-- @related [changelog](CHANGELOG.md) [license](LICENSE) -->

**Open Related File…** opens a file related to the current file.

It's common for code editors to have a built-in or extension-provided feature to switch between
a code file and its test, using some heuristics that work most of the time. Some editors and
extensions will also try to jump to other kinds of related files, such as CSS files. In my
experience, these tools find the related files often enough to sound promising, but are
frustrating in practice because they don't work 100% of the time, or don't work on entire
types of files.

This extension allows authors to specify each related file using a simple
syntax. The upside is that the extension works perfectly all the time. The downside is
that the author has to list each related file and has to update them when files move.

To specify a related file, add an annotation somewhere in the file (perhaps in a comment).
The annotation must start with `@related` and contain one or more Markdown-style links in the
form `[name](file-path)`, where `name` is any string and `file-path` is a path to the file,
relative to the project root.

```
// @related [test](/src/main.test.js)
```

You can list multiple related files as separate annotations:

```
// @related [css](/assets/main.css)
// @related [js](/assets/main.js)
```

or as a single annotation:

```
<!-- @related [css](/assets/main.css) [js](/assets/main.js) -->
```

(Multi-line annotations are not yet supported; use multiple annotations instead.)

This works with any text file; the `@related` annotation can be in a comment, in a README, etc.

## Usage

To run Open Related Files, select the **Editor → Open Related File…** menu item
or open the command palette and type `Open Related File…`. (It will be a lot more useful if you assign
a keyboard shortcut. I use `ctrl+option+R`.) If there is a `@related` annotation in the file, that
file will be opened. If there is more than one annotation in the file, a palette will appear letting
you choose the file to open.

## Contributing

Contributions are welcome. `Scripts/related.js` comes from
[synchronal/related-files](https://github.com/synchronal/related-files).

## Nova extensions I’ve written

- **Document Sections** lets you jump around to various sections in a text document using a customizable marker
  (typically a code comment in a certain format).
  [GitHub](https://github.com/eahanson/document-sections.novaextension) /
  [website](https://extensions.panic.com/extensions/eahanson/eahanson.document-sections/)

- **Elixir Manual Formatter** lets you manually format an Elixir file or entire project, in case the LSP formatter
  starts failing.
  [GitHub](https://github.com/eahanson/elixir-manual-formatter.novaextension) /
  [website](https://extensions.panic.com/extensions/eahanson/eahanson.elixir-manual-formatter/)

- **Go To Tab** shows a list of open editors and lets you choose one to go to.
  [GitHub](https://github.com/eahanson/go-to-tab.novaextension) /
  [website](https://extensions.panic.com/extensions/eahanson/eahanson.go-to-tab/)

- **Open File At Path** opens a palette into which you can type a file path and optionally line number and column number.
  The palette will default to the first line of text from the clipboard.
  [GitHub](https://github.com/eahanson/open-file-at-path.novaextension) /
  [website](https://extensions.panic.com/extensions/eahanson/eahanson.open-file-at-path/)

- **Open Recent** shows a list of recently-used editors and lets you choose one to open.
  [GitHub](https://github.com/eahanson/open-recent.novaextension) /
  [website](https://extensions.panic.com/extensions/eahanson/eahanson.open-recent/)

- **Open Related File** opens a file related to the current file.
  [GitHub](https://github.com/synchronal/related-files.novaextension) /
  [website](https://extensions.panic.com/extensions/eahanson/eahanson.related-files/)

- **Smart Sort Lines** sorts the selected lines of code with special support for comma-separated lists.
  [GitHub](https://github.com/eahanson/smart-sort-lines) /
  [website](https://extensions.panic.com/extensions/eahanson/eahanson.smart-sort-lines/)

## License, Copyright, Attributions

Copyright 2023 Erik Hanson. See [LICENSE](https://github.com/synchronal/related-files.novaextension/blob/main/LICENSE)).
