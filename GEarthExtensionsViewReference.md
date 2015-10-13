Defined in [src/view/\_header.js](http://code.google.com/p/earth-api-utility-library/source/browse/trunk/extensions/src/view/_header.js)

This class/namespace hybrid contains various camera/view related.




---

# Static Methods #

## createBoundsView(bounds, options) ##

Defined in [src/view/boundsview.js](http://code.google.com/p/earth-api-utility-library/source/browse/trunk/extensions/src/view/boundsview.js)

Creates a KmlAbstractView from a bounding box.

### Parameters: ###
  * **bounds** _`geo.Bounds`_  The bounding box for which to create a view.
  * **options** _`Object`_  The parameters of the bounds view.
    * **aspectRatio** _`Number`_  The aspect ratio (width : height) of the plugin viewport.
    * **defaultRange** _`Number`_ (Optional, Default: 1000) The default lookat range to use when creating a view for a degenerate, single-point bounding box.
    * **rangeMultiplier** _`Number`_ (Optional, Default: 1.5) A scaling factor by which to multiple the lookat range.

### Type: ###
`KmlAbstractView`


---


## createVantageView(cameraPoint, lookAtPoint) ##

Defined in [src/view/vantageview.js](http://code.google.com/p/earth-api-utility-library/source/browse/trunk/extensions/src/view/vantageview.js)

Creates an abstract view with the viewer at the given camera point, looking towards the given look at point. For best results, use ALTITUDE\_ABSOLUTE camera and look at points.

### Parameters: ###
  * **cameraPoint** _`PointOptions`|`geo.Point`_  The viewer location.
  * **lookAtPoint** _`PointOptions`|`geo.Point`_  The location to look at/towards.

### Type: ###
`KmlAbstractView`


---


## deserialize(viewString) ##

Defined in [src/view/serialization.js](http://code.google.com/p/earth-api-utility-library/source/browse/trunk/extensions/src/view/serialization.js)

Sets the current plugin viewport to the view represented by the given string.

### Parameters: ###
  * **viewString** _`String`_  The modified base64 alphabet string representing the view to fly to. This string should've previously been calculated using [GEarthExtensions#view.serialize](GEarthExtensionsViewReference#serialize().md).


---


## serialize() ##

Defined in [src/view/serialization.js](http://code.google.com/p/earth-api-utility-library/source/browse/trunk/extensions/src/view/serialization.js)

Serializes the current plugin viewport into a modified base64 alphabet string. This method is platform and browser agnostic, and is safe to store and distribute to others.

### Type: ###
`String`

### Returns: ###

_`String`_ A string representing the current viewport.

### See: ###

http://code.google.com/apis/maps/documentation/include/polyline.js
> for inspiration.


---


## setToBoundsView() ##

Defined in [src/view/boundsview.js](http://code.google.com/p/earth-api-utility-library/source/browse/trunk/extensions/src/view/boundsview.js)

Creates a bounds view and sets it as the Earth plugin's view. This function takes the same parameters as [GEarthExtensions#view.createBoundsView](GEarthExtensionsViewReference#createBoundsView(bounds,_options).md).
