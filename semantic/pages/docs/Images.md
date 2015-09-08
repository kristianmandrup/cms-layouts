Images UI
=========

Images UI consists of the following screens:

-	Images
-	Image Lists

Perhaps the last two can be combined into one elegant screen?

### Images

Images should allow Creation/edit of an individual image. An image has a:

-	name
-	caption
-	actual image

We should also allow some basic transformations to be performed directly from the UI, such as

-	90 degree rotation
-	clipping

Each time a new image is worked on, the previous images for the current users session should be added to some sort of session list at the top, so it is easy to go back and work on previous image or even just get an overview of which images I've added (or worked on) in my current session. So new images should be colored or outlined in green to indicate fresh status. Perhaps deleted images should be outlined in red, and allow for undo of delete. Edited images should be outlined in blue.

### Image lists

The image lists allows you to easily manage all your lists and move images from one list to another, remove images etc. If need be, you can enter into a list for more refined management (see above). You can also create a new list.

Each list has its own container which acts as a drop zone. Images can be dragged in here to be added to the given list.

At the bottom (or top) of the list, there is a no-name list where images can be dropped to create a new list. The "no name" is an input which when edited, will create a new list (even an empty one if no images in container).
