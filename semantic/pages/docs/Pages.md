Pages
-----

Pages UI consists of the following screens:

-	Pages
-	Page (modal: preview/update)

### Pages

Allows for drag'n drop of lists between pages. Also provides a full overview of multiple pages, comparing them to each other in one view. For any Page displayed there should be a preview available, shown in a Modal window.

Each page has its own set of containers which acts as drop zones. Items (lists) can be dragged in to be added to the given list.

At the bottom (or top) of the pages, there is a no-name page where items can be dropped to create a new page. The "no name" is an input which when edited, will create a new page of that name (even an empty one if no items in container).

Pages with no items should be outlined in red, to display a warning. A page with no items can NOT be published (not valid to be published).

### Page (modal: preview/update)

Used for both Preview and Edit mode. Preview should allow Edit of each field displayed by a small edit icon.

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
