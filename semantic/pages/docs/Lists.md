Lists
-----

Lists UI consists of the following screens:

-	List (modal: edit/preview)
-	Lists

### Lists

The Lists screen shows multiple Lists and allows Drag'n drop of entries between Lists.

Each list has its own container which acts as a drop zone. Items can be dragged in here to be added to the given list.

At the bottom (or top) of the list, there is a no-name list where items can be dropped to create a new list. The "no name" is an input which when edited, will create a new list (even an empty one if no items in container).

List with no items should be outlined in red, to display a warning. A list with no items can NOT be published (not valid to be published).

### List (modal: edit/preview)

Used for both Preview and Edit mode. Preview should allow Edit of each field displayed by a small edit icon.

*List* should allow CRUD (Create, Read, Update, Delete) actions on an individual List. A List is a composite consisting of *Lists* and *ListItems*. A List is often used for menus, sidebar menus, footr menus, top menus, even nested menus. Can also be used for any other types of lists or navigation (tabs, accordions etc)

To construct the List it should be possible to simply Drag'n drop Lists and List items into a list of entries and reorder them as needed.

A list can be previewed using one or more Layout templates.
