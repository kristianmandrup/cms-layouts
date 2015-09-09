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
gulp watch
open semantic/pages/home.html
```

### Development

Use http://html2jade.org/ to convert Semantic UI HTML "snippets" to Jade. Use http://jade-lang.com/ to work with the HTML structure. In particular use:

-	[Inheritance](http://jade-lang.com/reference/extends/)
-	[Mixins](http://jade-lang.com/reference/mixins/)

To create snippets of Jade that can be reused across multiple pages.

### Pages

Demonstrate the UI concepts for eah page

See `/semantic/pages`

### Docs

Describe the basic design idea and requirements for each set of pages.

See `/semantic/pages/docs`
