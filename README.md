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

### Setting the project root

You can create a config file in `.config/related-files.json` that can specify a `projectRoot`, which can be useful
when a project's root directory can't be determined by an editor, for example when an editor's working directory is a
subdirectory of the project's root. The value of the project root is then removed from the related file path to find
the actual file in the project.

Given this example config file:

    {
      "projectRoot": "/subprojects/proj1"
    }

And this example related annotation:

    @related [test](/subprojects/proj1/tests/hello_test.js)

Then the returned related path would be:

    /tests/hello_test.js

## Usage

To run Open Related Files, select the **Editor → Open Related File…** menu item
or open the command palette and type `Open Related File…`. (It will be a lot more useful if you assign
a keyboard shortcut. I use `ctrl+option+R`.) If there is a `@related` annotation in the file, that
file will be opened. If there is more than one annotation in the file, a palette will appear letting
you choose the file to open.

## Contributing

Contributions are welcome. `Scripts/related.js` comes from
[synchronal/related-files](https://github.com/synchronal/related-files).

## Other Nova extensions you might like :)

Here is a [list of my other Nova extensions](https://eahanson.com/articles/nova-extensions).

## License, Copyright, Attributions

Copyright 2023 Erik Hanson. See [LICENSE](https://github.com/synchronal/related-files.novaextension/blob/main/LICENSE).
