Defined in [src/fx/\_header.js](http://code.google.com/p/earth-api-utility-library/source/browse/trunk/extensions/src/fx/_header.js)

Contains various animation/effects tools for use in the Google Earth API.




---

# Static Methods #

## animateProperty(object, property, options) ##

Defined in [src/fx/objanim.js](http://code.google.com/p/earth-api-utility-library/source/browse/trunk/extensions/src/fx/objanim.js)

Animate a numeric property on a plugin object.

### Parameters: ###
  * **object** _`KmlObject`_  The plugin object whose property to animate.
  * **property** _`String`_  The property to animate. This should match 1:1 to the getter/setter methods on the plugin object. For example, to animate a KmlPoint latitude, pass in `latitude`, since the getter/setters are `getLatitude` and `setLatitude`.
  * **options** _`Object`_  The property animation options.
    * **duration** _`Number`_ (Optional, Default: 500) The duration, in milliseconds, of the animation.
    * **start** _`Number`_ (Optional) The value of the property to set at the start of the animation.
    * **end** _`Number`_ (Optional) The desired end value of the property.
    * **delta** _`Number`_ (Optional) If end is not specified, you may set this to the desired change in the property value.
    * **easing** _`String`|`Function`_ (Optional, Default: 'none') The easing function to use during the animation. Valid values are 'none', 'in', 'out', or 'both'. Alternatively, an easy function mapping `[0.0, 1.0] -> [0.0, 1.0]` can be specified. No easing is `f(x) = x`.
    * **callback** _`Function`_ (Optional) A callback method to fire when the animation is completed/stopped. The callback will receive an object literal argument that will contain a 'cancelled' boolean value that will be true if the effect was cancelled.
    * **featureProxy** _`KmlFeature`_ (Optional) A feature to associate with this property animation for use with [GEarthExtensions#fx.cancel](GEarthExtensionsFxReference#cancel(feature).md) or [GEarthExtensions#fx.rewind](GEarthExtensionsFxReference#rewind(feature).md).


---


## bounce(placemark, options) ##

Defined in [src/fx/bounce.js](http://code.google.com/p/earth-api-utility-library/source/browse/trunk/extensions/src/fx/bounce.js)

Bounce a placemark once.

### Parameters: ###
  * **placemark**
  * **options**


---


## cancel(feature) ##

Defined in [src/fx/objanim.js](http://code.google.com/p/earth-api-utility-library/source/browse/trunk/extensions/src/fx/objanim.js)

Cancel all animations on a given feature, potentially leaving them in an intermediate visual state.

### Parameters: ###
  * **feature**


---


## rewind(feature) ##

Defined in [src/fx/objanim.js](http://code.google.com/p/earth-api-utility-library/source/browse/trunk/extensions/src/fx/objanim.js)

Cancel all animations on a given feature and revert them to their t = 0 state.

### Parameters: ###
  * **feature**
