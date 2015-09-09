CMS UI
------

### Install

First install dependencies using npm:

-	jquery
-	jade
-	semantic-ui
-	sortablejs

```sh
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

### Pages

Demonstrate the UI concepts for eah page

See `/semantic/pages`

### Docs

Describe the basic design idea and requirements for each set of pages.

See `/semantic/pages/docs`
