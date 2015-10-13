Defined in [src/\_header.js](http://code.google.com/p/earth-api-utility-library/source/browse/trunk/extensions/src/_header.js)

The root class/namespace hybrid for the Earth API extensions library. This class groups functionality into namespaces such as [GEarthExtensions.dom](GEarthExtensionsDomReference.md) and [GEarthExtensions.fx](GEarthExtensionsFxReference.md).




---

# Class Constructor #

## GEarthExtensions(pluginInstance) ##

### Example: ###

```
var gex = new GEarthExtensions(ge); // ge is an instance of GEPlugin
gex.dom.clearFeatures(); // gex is an instance of a class, and gex.dom
                         // is effectively a namespace grouping
                         // functionality
```

### Parameters: ###
  * **pluginInstance** _`GEPlugin`_  The Google Earth Plugin instance to associate this [GEarthExtensions](GEarthExtensionsReference.md) instance with.


---

# Static Methods #

## isInstanceOfEarthInterface(object, type) ##

Defined in [src/\_globals.js](http://code.google.com/p/earth-api-utility-library/source/browse/trunk/extensions/src/_globals.js)

Determines whether or not the given object is directly an instance of the specified Earth API type.

### Parameters: ###
  * **object** _`Object`_  The object to test.
  * **type** _`String`_  The Earth API type string, i.e. 'KmlPlacemark'
