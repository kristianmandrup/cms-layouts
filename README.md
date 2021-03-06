CMS UI
------

### Install

Install [Node 4.0](https://nodejs.org/en/download/) or higher

Install dependencies via npm:

-	jquery
-	jade
-	semantic-ui
-	sortablejs
-	pickadate
-	...

```sh
npm install -g gulp myth jade
npm install
```

For semantic-ui, please use default configuration when asked. Then build semantic-ui distribution files in `/semantic/dist`

```sh
cd semantic
gulp build
cd ..
```

Now you should be ready to work on the page layouts. See the docs for guidance!

### Usage

To view the site:

```
open semantic/pages/home.html
```

### Jade templates

To compile the Jade templates to HTML:

```
gulp jade
open semantic/pages/home.html
```

To watch the templates and have them auo-compile on Save:

`gulp watch`

### Global Template Data

Global data is fed into the Jade templates via [gulp-data](https://www.npmjs.com/package/gulp-data) as recommended in [gulp-jade](https://github.com/phated/gulp-jade)

The data is fetched from `/data/index.js`

```js
// global template data
module.exports = {
  menus: {
    main: [
      ...
    ],
    session: [
      ...
    ]
  }
}
```

### Jade Template page

Currently the only page which has been converted (partly) to the "Jade Way" is: `cms-block-lists.jade`

```html
// which menu item is displayed as active
- var activeItem = {label: 'Blocks'}
extends ./layouts/page-layout.jade      

block scripts
  // page specific scripts
block styles
  // page specific styles
block content
  // page specific content
```

Please make this template work (f.ex by moving it to `/test` and working with it in isolation using `gulp jade:test`\)

Then make all the other page templates follow a similar style. Try to make the pages as composable as possible using Mixins and Global data. We don't stop here!

These templates and mixins will be later be converted to *Custom tags* and *Reactive Widgets* when we move this project to [Markoa](https://github.com/kristianmandrup/markoa)

### Jade Compile: Troubleshoot

A sample Jade compilation is available as the task `jade:test` compiling a single template in `/test`. If the main one doesn't work, try working from this point until it works, then use in main compilation task!!

`gulp jade:test`

You can also configure the jade compile options directly, such as enabling debug. The filename is used to calculate relative paths, for `extends` and `includes` (see [here](https://github.com/viniwrubleski/grunt-jade-php/issues/2)\)

```js
var jadeOpts = {
  // debug: true,
  filename: './templates/',
  pretty: true
}
```

### Gulp build configuration

Gulp is configured in the `/build` folder. Paths used are defined in `paths.js`. All build tasks are configured in `/build/tasks`

-	[Jade](http://jade-lang.com/) in `jade.js`
-	[Stylus](https://learnboost.github.io/stylus/) in `stylus.js`

Note: Stylus MUST be used for styling. Don't use raw CSS!!! Please see the `stylus.js` file and use the plugins listed as you get to understand the power of Stylus.

Run `gulp watch` to watch `styl` and `jade` files for changes and auto-compile on save.

Read the [Stylus docs](https://learnboost.github.io/stylus/)

Stylus plugins:

-	[Nib](https://github.com/tj/nib)
-	[Axis](http://axis.netlify.com/)
-	[Rupture](http://jenius.github.io/rupture/)
-	[Fluidity](www.fluiditycss.com)
-	[Typographic](https://github.com/corysimmons/typographic)
-	[Jeet](http://jeet.gs/)
-	Rucksack CSS
-	Various PostCSS plugins...
-	For the complete list, see `package.json` file

### Video tutorials

We highly recommend watching these [Stylus tutorial videos](https://www.youtube.com/playlist?list=PLLnpHn493BHFWQGA1PcyQZWAfR96a4CkH) to get a feel and understanding of the power of using Stylus with plugins.

Get over the temptation to use Bootstrap or kin for all your styling needs. Break your bad habits ;)

### Development

Use http://html2jade.org/ to convert Semantic UI HTML "snippets" to Jade. Use [Jade](http://jade-lang.com/) to work with the HTML structure. In particular use:

-	[Inheritance](http://jade-lang.com/reference/extends/)
-	[Mixins](http://jade-lang.com/reference/mixins/)

To create snippets of Jade that can be reused across multiple pages.

Take a look at `cms-blocks.html` for the most complete *entity form* page. The top and bottom menus need some *LUV*, however most of the required actions and form fields should be included (speak to Ankush).

Look at `cms-image-lists.html` for the most updated page for dragging elements between containers. The Image list allows the containers themselves to be sorted!

### Pages

Demonstrate the UI concepts for eah page

See `/semantic/pages`

### Docs

Describe the basic design idea and requirements for each set of pages.

See `/semantic/pages/docs`
