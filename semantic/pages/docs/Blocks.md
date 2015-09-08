Blocks
======

Blocks UI consists of the following screens:

-	Block (modal: edit/preview)
-	Blocks lists

### Block lists

*Block lists* allows you to easily manage all your lists and move blocks from one list to another, remove blocks etc. You can also create a new list.

Each list has its own container which acts as a drop zone. Blocks can be dragged in here to be added to the given list.

At the bottom (or top) of the list, there is a no-name list where blocks can be dropped to create a new list. The "no name" is an input which when edited, will create a new list (even an empty one if no blocks in container).

When a single Block is clicked for Edit, a modal should be shown to edit that Block. A Modal view is also displayed for previewing an Block.

### Block (modal: edit/preview)

Used for both Preview and Edit mode. Preview should allow Edit of each field displayed by a small edit icon.

Block view should allow CRUD (Create, Read, Update, Delete) actions on individual blocks. A block has the following fields:

-	name (variable name, ie. no spaces, alphanumeric, first character must be a letter)
-	title (string, not empty)
-	categories (multi select list)
-	tags (multi select list)
-	templates (multi select list)
-	summary (text)
-	content (text)
-	description (text)
-	(comments thread) (list)

Each time a new Block is worked on, the previous Blocks for the current users session should be added to some sort of session list at the top, so it is easy to go back and work on previous Block or even just get an overview of which Blocks I've added (or worked on) in my current session. New Blocks should be colored or outlined in green to indicate "fresh" status. Deleted blocks should be outlined in red, and allow for undo of delete. Edited blocks should be outlined in blue.

A Block can be previewed using one or more Layout templates.
