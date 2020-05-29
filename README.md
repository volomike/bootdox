# bootdox
A Bootstrap v3.4.1 Template for Creating and Viewing API Docs

Version: Beta 1.0 \
MIT License

![Screenshot]
(https://raw.githubusercontent.com/volomike/bootdox/master/img/screenshot.png)

Using Bootstrap v3.4.1, this template can be edited to make REST API docs vaguely similar in nature to the format of the popular [docbox](https://github.com/tmcw/docbox).

If you have a knowledge of Bootstrap v3.4.1, you can immediately get started by copying and pasting existing `SECTION` tags and editing them. These have a `rel` attribute on them that links to the `rel` attribute on the left sidebar menu of links pointing to these sections. jQuery is used, although no knowledge of jQuery is required -- this template handles that for you, instead.

This project uses the [highlight.js project](https://github.com/highlightjs/highlight.js) for code syntax highlighting. The documentation for that is here: https://highlightjs.readthedocs.io/en/latest/ https://highlightjs.org/download/

To enable users to choose programming languages, wrap sections with `<div class="choose choose-LANG">...</div>` where `LANG` is the lowercase alphanumeric equivalent of a clicked language in the navbar pill tabs in the upper right. Thus `<div class="choose choose-nodejs">...</div>` would be linked to Node.js in the pill tab text.

**KNOWN ISSUES**

*Feel free to fork this project to make it better!*

- This was designed mostly for Chrome, Firefox, and Edge Chromium browsers. It has not been tested elsewhere.
- Currently, no mobile or tablet interface (responsive design) has been setup in the HTML and the `assets.responsive.css` file. It likely can be forked and accomplished, however. It's just that, for me, it's not a high priority because API docs are meant to be read on larger screens by developers.
- A future improvement would be to use LocalStorage API, or cookie API, to write to the browser one's preferred last language setting choice.
- A future improvement would be to utilize URL hashtags so that one could have bookmarkable API links that go direct to the section you want. 


