Defined in [src/edit/\_header.js](http://code.google.com/p/earth-api-utility-library/source/browse/trunk/extensions/src/edit/_header.js)

Contains methods for allowing user-interactive editing of features inside the Google Earth Plugin.




---

# Static Methods #

## drawLineString(lineString, options) ##

Defined in [src/edit/linepoly.js](http://code.google.com/p/earth-api-utility-library/source/browse/trunk/extensions/src/edit/linepoly.js)

Enters a mode in which the user can draw the given line string geometry on the globe by clicking on the globe to create coordinates. To cancel the placement, use [GEarthExtensions#edit.endEditLineString](GEarthExtensionsEditReference#endEditLineString(lineString).md). This is similar in intended usage to [GEarthExtensions#edit.place](GEarthExtensionsEditReference#place(placemark,_options).md).

### Parameters: ###
  * **lineString** _`KmlLineString`|`KmlLinearRing`_  The line string geometry to allow the user to draw (or append points to).
  * **options** _`Object`_ (Optional) The edit options.
    * **bounce** _`Boolean`_ (Optional, Default: true) Whether or not to enable bounce effects while drawing coordinates.
    * **drawCallback** _`Function`_ (Optional) A callback to fire when new vertices are drawn. The only argument passed will be the index of the new coordinate (it can either be prepended or appended, depending on whether or not ensuring counter-clockwisedness).
    * **finishCallback** _`Function`_ (Optional) A callback to fire when drawing is successfully completed (via double click or by clicking on the first coordinate again).
    * **ensureCounterClockwise** _`Boolean`_ (Optional, Default: true) Whether or not to automatically keep polygon coordinates in counter clockwise order.


---


## editLineString(lineString, options) ##

Defined in [src/edit/linepoly.js](http://code.google.com/p/earth-api-utility-library/source/browse/trunk/extensions/src/edit/linepoly.js)

Allows the user to edit the coordinates of the given line string by dragging existing points, splitting path segments/creating new points or deleting existing points.

### Parameters: ###
  * **lineString** _`KmlLineString`|`KmlLinearRing`_  The line string or lienar ring geometry to edit. For KmlPolygon geometries, pass in an outer or inner boundary.
  * **options** _`Object`_ (Optional) The line string edit options.
    * **editCallback** _`Function`_ (Optional) A callback function to fire when the line string coordinates have changed due to user interaction.


---


## endDraggable(placemark) ##

Defined in [src/edit/dragging.js](http://code.google.com/p/earth-api-utility-library/source/browse/trunk/extensions/src/edit/dragging.js)

Ceases the draggability of the given placemark. If the placemark is in the process of being placed via [GEarthExtensions#edit.place](GEarthExtensionsEditReference#place(placemark,_options).md), the placement is cancelled.

### Parameters: ###
  * **placemark**


---


## endEditLineString(lineString) ##

Defined in [src/edit/linepoly.js](http://code.google.com/p/earth-api-utility-library/source/browse/trunk/extensions/src/edit/linepoly.js)

Ceases the ability for the user to edit or draw the given line string.

### Parameters: ###
  * **lineString**


---


## makeDraggable(placemark, options) ##

Defined in [src/edit/dragging.js](http://code.google.com/p/earth-api-utility-library/source/browse/trunk/extensions/src/edit/dragging.js)

Turns on draggability for the given point placemark.

### Parameters: ###
  * **placemark** _`KmlPlacemark`_  The point placemark to enable dragging on.
  * **options** _`Object`_ (Optional) The draggable options.
    * **bounce** _`Boolean`_ (Optional) Whether or not to bounce up upon dragging and bounce back down upon dropping.
    * **dragCallback** _`Function`_ (Optional) A callback function to fire continuously while dragging occurs.
    * **dropCallback** _`Function`_ (Optional) A callback function to fire once the placemark is successfully dropped.
    * **draggingStyle** _`StyleOptions`|`KmlStyle`_ (Optional) The style options to apply to the placemark while dragging.
    * **targetScreenOverlay** _`ScreenOverlayOptions`|`KmlScreenOverlay`_ (Optional) A screen overlay to use as a drop target indicator (i.e. a bullseye) while dragging.


---


## place(placemark, options) ##

Defined in [src/edit/dragging.js](http://code.google.com/p/earth-api-utility-library/source/browse/trunk/extensions/src/edit/dragging.js)

Enters a mode in which the user can place the given point placemark onto the globe by clicking on the globe. To cancel the placement, use [GEarthExtensions#edit.endDraggable](GEarthExtensionsEditReference#endDraggable(placemark).md).

### Parameters: ###
  * **placemark** _`KmlPlacemark`_  The point placemark for the user to place onto the globe.
  * **options** _`Object`_ (Optional) The draggable options. See [GEarthExtensions#edit.makeDraggable](GEarthExtensionsEditReference#makeDraggable(placemark,_options).md).
