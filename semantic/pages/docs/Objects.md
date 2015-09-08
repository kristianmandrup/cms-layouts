Objects
-------

Objects UI consists of the following screens:

-	Object (modal: preview/edit)
-	Objects

### Objects

The Objects screen shows multiple objects and allows Drag'n drop of entries between Objects.

Each object has its own container which acts as a drop zone. Items can be dragged in here to be added to the given list.

At the bottom (or top) of the objects, there is a no-name object where items can be dropped to create a new object. The "no name" object has an input field which when edited, will create a new object (even an empty one if no items in container).

Objects with no items should be outlined in red, to display a warning. An object with no items can NOT be published (not valid to be published).

### Object (modal: preview/edit)

Used for both Preview and Edit mode. Preview should allow Edit of each field displayed by a small edit icon.

Object should allow CRUD (Create, Read, Update, Delete) actions on an individual Object. An Object is a Hash where each key can point to either a Block or an Image.

To construct the image it should be possible to simply Drag'n drop Images and Blocks into a list of entries. Each Image/Block has a name on its own, and the entry should use that name by default. However the Object must allow override of the name used for the key by a simple inline input.

An Object can be previewed using one or more Layout templates.
