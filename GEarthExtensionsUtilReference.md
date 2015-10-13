Defined in [src/util/\_header.js](http://code.google.com/p/earth-api-utility-library/source/browse/trunk/extensions/src/util/_header.js)

This class/namespace hybrid contains miscellaneous utility functions and shortcuts for the Earth API.




---

# Static Methods #

## batchExecute(batchFn, context) ##

Defined in [src/util/misc.js](http://code.google.com/p/earth-api-utility-library/source/browse/trunk/extensions/src/util/misc.js)

Executes the given function quickly using a Google Earth API callback hack. Future versions of this method may use other methods for batch execution.

### Parameters: ###
  * **batchFn** _`Function`_  The function containing batch code to execute.
  * **context** _`Object`_ (Optional) Optional context parameter to pass to the function.


---


## blendColors(color1, color2, fraction) ##

Defined in [src/util/color.js](http://code.google.com/p/earth-api-utility-library/source/browse/trunk/extensions/src/util/color.js)

Calculates a simple composite of the two given colors.

### Parameters: ###
  * **color1** _`String`|`Number``[``]`_  The first ('source') color. Anthing that can be parsed with [GEarthExtensions#util.parseColor](GEarthExtensionsUtilReference#parseColor(color,_opacity).md).
  * **color2** _`String`|`Number``[``]`_  The second ('destination') color. Anything that can be parsed with [GEarthExtensions#util.parseColor](GEarthExtensionsUtilReference#parseColor(color,_opacity).md).
  * **fraction** _`Number`_ (Optional, Default: 0.5) The amount of color2 to composite onto/blend with color1, as a fraction from 0.0 to 1.0.

### Type: ###
`String`


---


## callMethod(object, method) ##

Defined in [src/util/misc.js](http://code.google.com/p/earth-api-utility-library/source/browse/trunk/extensions/src/util/misc.js)

Calls method on object with optional arguments. Arguments to pass to the method should be given in order after the 'method' argument.

### Parameters: ###
  * **object** _`Object`_  The object to call the method on.
  * **method** _`String`_  The method to call.


---


## clearAllJsData(object) ##

Defined in [src/util/jsdata.js](http://code.google.com/p/earth-api-utility-library/source/browse/trunk/extensions/src/util/jsdata.js)

Clears all JS-side data for the given KmlObject.

### Parameters: ###
  * **object** _`KmlObject`_  The plugin object to clear data on.


---


## clearJsDataValue(object, key) ##

Defined in [src/util/jsdata.js](http://code.google.com/p/earth-api-utility-library/source/browse/trunk/extensions/src/util/jsdata.js)

Clears the JS-side data for the given KmlObject associated with the given key.

### Parameters: ###
  * **object** _`KmlObject`_  The plugin object to clear data on.
  * **key** _`String`_  The JS data key whose value should be cleared.


---


## decodeArray(str) ##

Defined in [src/util/serialization.js](http://code.google.com/p/earth-api-utility-library/source/browse/trunk/extensions/src/util/serialization.js)

Decodes a string representing an array of signed numbers encoded with [GEarthExtensions#util.encodeArray](GEarthExtensionsUtilReference#encodeArray(arr).md).

### Parameters: ###
  * **str** _`String`_  The encoded string.

### Type: ###
`Number``[``]`


---


## displayKml(url, options) ##

Defined in [src/util/kml.js](http://code.google.com/p/earth-api-utility-library/source/browse/trunk/extensions/src/util/kml.js)

Loads and shows the given KML URL in the Google Earth Plugin instance.

### Parameters: ###
  * **url** _`String`_  The URL of the KML content to show.
  * **options** _`Object`_ (Optional) KML display options.
    * **cacheBuster** _`Boolean`_ (Optional) Enforce freshly downloading the KML by introducing a cache-busting query parameter.
    * **flyToView** _`Boolean`_ (Optional) Fly to the document-level abstract view in the loaded KML after loading it. If no explicit view is available, a default bounds view will be calculated and used unless options.flyToBoundsFallback is false. See [GEarthExtensions#util.flyToObject](GEarthExtensionsUtilReference#flyToObject(obj,_options).md) for more information.
    * **flyToBoundsFallback** _`Boolean`_ (Optional) If options.flyToView is true and no document-level abstract view is explicitly defined, do not calculate and fly to a bounds view.


---


## displayKmlString(str, options) ##

Defined in [src/util/kml.js](http://code.google.com/p/earth-api-utility-library/source/browse/trunk/extensions/src/util/kml.js)

Loads and shows the given KML string in the Google Earth Plugin instance.

### Parameters: ###
  * **str** _`String`_  The KML string to show.
  * **options** _`Object`_ (Optional) KML display options.
    * **flyToView** _`Boolean`_ (Optional) Fly to the document-level abstract view in the parsed KML. If no explicit view is available, a default bounds view will be calculated and used unless options.flyToBoundsFallback is false. See [GEarthExtensions#util.flyToObject](GEarthExtensionsUtilReference#flyToObject(obj,_options).md) for more information.
    * **flyToBoundsFallback** _`Boolean`_ (Optional) If options.flyToView is true and no document-level abstract view is explicitly defined, do not calculate and fly to a bounds view.

### Returns: ###

Returns the parsed object on success, or null if there was an error.


---


## encodeArray(arr) ##

Defined in [src/util/serialization.js](http://code.google.com/p/earth-api-utility-library/source/browse/trunk/extensions/src/util/serialization.js)

Encodes an array of signed numbers into a string.

### Parameters: ###
  * **arr** _`Number``[``]`_  An array of signed numbers.

### Type: ###
`String`

### Returns: ###

An encoded string representing the array of numbers.


---


## flyToObject(obj, options) ##

Defined in [src/util/misc.js](http://code.google.com/p/earth-api-utility-library/source/browse/trunk/extensions/src/util/misc.js)

Flies to an object; if the object is a feature and has an explicitly defined abstract view, that view is used. Otherwise, attempts to calculate a bounds view of the object and flies to that (assuming options.boundsFallback is true).

### Parameters: ###
  * **obj** _`KmlObject`_  The object to fly to.
  * **options** _`Object`_ (Optional) Flyto options.
    * **boundsFallback** _`Boolean`_ (Optional) Whether or not to attempt to calculate a bounding box view of the object if it doesn't have an abstract view.
    * **aspectRatio** _`Number`_ (Optional, Default: 1.0) When calculating a bounding box view, this should be the current aspect ratio of the plugin window.


---


## getCamera(altitudeMode) ##

Defined in [src/util/misc.js](http://code.google.com/p/earth-api-utility-library/source/browse/trunk/extensions/src/util/misc.js)

Gets the current view as a KmlCamera.

### Parameters: ###
  * **altitudeMode** _`Number`_ (Optional, Default: ALTITUDE\_ABSOLUTE) The altitude mode that the resulting camera should be in.

### Type: ###
`KmlCamera`

### Returns: ###

Returns the current view as a KmlCamera.


---


## getJsDataValue(object, key) ##

Defined in [src/util/jsdata.js](http://code.google.com/p/earth-api-utility-library/source/browse/trunk/extensions/src/util/jsdata.js)

Gets the JS-side data for the given KmlObject associated with the given key.

### Parameters: ###
  * **object** _`KmlObject`_  The plugin object to get data for.
  * **key** _`String`_  The JS data key to request.


---


## getLookAt(altitudeMode) ##

Defined in [src/util/misc.js](http://code.google.com/p/earth-api-utility-library/source/browse/trunk/extensions/src/util/misc.js)

Gets the current view as a KmlLookAt.

### Parameters: ###
  * **altitudeMode** _`Number`_ (Optional, Default: ALTITUDE\_ABSOLUTE) The altitude mode that the resulting LookAt should be in.

### Type: ###
`KmlLookAt`

### Returns: ###

Returns the current view as a KmlLookAt.


---


## hasJsData(object) ##

Defined in [src/util/jsdata.js](http://code.google.com/p/earth-api-utility-library/source/browse/trunk/extensions/src/util/jsdata.js)

Returns whether or not the KmlObject has any JS-side data.

### Parameters: ###
  * **object** _`KmlObject`_  The plugin object to inquire about.


---


## lookAt() ##

Defined in [src/util/misc.js](http://code.google.com/p/earth-api-utility-library/source/browse/trunk/extensions/src/util/misc.js)

Creates a KmlLookAt and sets it as the Earth plugin's view. This function takes the same parameters as [GEarthExtensions#dom.buildLookAt](GEarthExtensionsDomReference#buildLookAt(point,_options).md).


---


## parseColor(color, opacity) ##

Defined in [src/util/color.js](http://code.google.com/p/earth-api-utility-library/source/browse/trunk/extensions/src/util/color.js)

Converts between various color formats, i.e. `#rrggbb`, to the KML color format (`aabbggrr`)

### Parameters: ###
  * **color** _`String`|`Number``[``]`_  The source color value.
  * **opacity** _`Number`_ (Optional) An optional opacity to go along with CSS/HTML style colors, from 0.0 to 1.0.

### Type: ###
`String`

### Returns: ###

_`String`_ A string in KML color format (`aabbggrr`), or null if the color could not be parsed.


---


## setJsDataValue(object, key, value) ##

Defined in [src/util/jsdata.js](http://code.google.com/p/earth-api-utility-library/source/browse/trunk/extensions/src/util/jsdata.js)

Sets the JS-side data for the given KmlObject associated with the given key to the passed in value.

### Parameters: ###
  * **object** _`KmlObject`_  The object to get data for.
  * **key** _`String`_  The JS data key to set.
  * **value** **The value to store for this key.**


---


## takeOverCamera(enable) ##

Defined in [src/util/misc.js](http://code.google.com/p/earth-api-utility-library/source/browse/trunk/extensions/src/util/misc.js)

Enables or disables full camera ownership mode, which sets fly to speed to teleport, disables user mouse interaction, and hides the navigation controls.

### Parameters: ###
  * **enable** _`Boolean`_  Whether to enable or disable full camera ownership.
