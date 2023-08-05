# Simple Page Inspector (Bookmarklet) for SEO and Web Development Purposes

This is a useful bookmarklet I am using on a daily basis for SEO and Web Development purposes.

# Features

Bypasses elements in the header, not altering their style or appearance.

Changes colors of `headers (h1 to h6)`, using different color combinations for a better distinction between different types of headers.

`Decorates paragraphs` with a visible dashed outline, highlighting the text content clearly.

`Emphasizes hyperlinks` (a tags) by making text bold, changing color to red and surrounding with a dotted border.

Helps in `distinguishing unordered list elements` by a bright cyan dotted outline. Improves visibility of list items by changing their background color to light turquoise.

`Highlights form elements` by surrounding them with a blue dashed border and changing the text color to blue. Differentiates form inputs, select boxes, and textareas by altering their background color.

This bookmarklet also provides `toggle functionality`, allowing users to switch between the applied styles and the original page design.

# How to run this bookmarklet?

Properly formatted javascript code with comments is under the `src` directory. Is is already written as IIFE (Immediately Invoked Function Expression). The usable bookmarklet code (minified and encoded) is under `dist` directory. You can simply copy-paste it to the URL field when creating standard bookmark.

You can also use various online tools to convert the Javascript code to a bookmarklet. For example
https://mrcoles.com/bookmarklet/.


# Download and test locally

You can use `git clone` and install needed dependencies (`bookmarklet` and `nodemon`) via `npm install`. You can then run `npm build` to convert src/index.js to a bookmarklet code (uses `bookmarklet` NPM package)

For convenience, you can also run `npm watch` (uses `nodemon` NPM package). This will watch any changes made to `index.js` file and automatically convert them to bookmarklet code to `dist/bookmarklet.js` file.
