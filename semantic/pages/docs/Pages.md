Pages
-----

Pages UI consists of the following screens:

-	Pages
-	Page

### Page

Page should allow CRUD (Create, Read, Update, Delete) actions on an individual Page. A Page has the following fields:

-	name (variable name)
-	title (string)
-	tags (list)
-	lists (list of ItemList)
-	objects (list of HashList)
-	blocks (list of BlockList)
-	images (list of ImageList)
-	(comments) (list)

Ideally we should be able to construct a page via Drag'n drop, just like Block- and ImageLists. The current multi-select lists are just for "basic testing" (REST API).

There should be a preview available, shown in a Modal window or inline if sufficient room (screen estate).

### Pages

Similar to Block- and ImageLists it would be convenient if we could simply Drag'n drop lists between pages and get a full overview of multiple pages, comparing them to each other in one view. For Page displayed there should be a preview available, shown in a Modal window.
