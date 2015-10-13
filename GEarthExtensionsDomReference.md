Defined in [src/dom/\_header.js](http://code.google.com/p/earth-api-utility-library/source/browse/trunk/extensions/src/dom/_header.js)

Contains DOM builder functions (buildXX) and DOM manipulation/traversal functions.




---

# Static Methods #

## buildCamera(point, options) ##

Defined in [src/dom/views.js](http://code.google.com/p/earth-api-utility-library/source/browse/trunk/extensions/src/dom/views.js)

Creates a new camera object with the given parameters.

### Parameters: ###
  * **point** _`PointSpec`_ (Optional) The point at which to place the camera.
  * **options** _`Object`_  The parameters of the camera object to create.
    * **point** _`PointSpec`_ (Optional) The point at which to place the camera.
    * **copy** _`Boolean`_ (Optional) Whether or not to copy parameters from the existing view if they aren't explicitly specified in the options.
    * **heading** _`Number`_ (Optional) The camera heading/direction.
    * **tilt** _`Number`_ (Optional) The camera tilt.
    * **range** _`Number`_ (Optional) The camera roll.

### Type: ###
`KmlCamera`


---


## buildDocument(children, options) ##

Defined in [src/dom/features.js](http://code.google.com/p/earth-api-utility-library/source/browse/trunk/extensions/src/dom/features.js)

Creates a new document with the given parameters.

### Parameters: ###
  * **children** _`KmlFeature``[``]`_ (Optional) The children of this document.
  * **options** _`Object`_  The parameters of the document to create.
    * **name** _`String`_ (Optional) The name of the feature.
    * **visibility** _`Boolean`_ (Optional) Whether or not the feature should be visible.
    * **description** _`String`_ (Optional) An HTML description for the feature; may be used as balloon text.
    * **children** _`KmlFeature``[``]`_ (Optional) The children of this document.

### Type: ###
`KmlDocument`


---


## buildFolder(children, options) ##

Defined in [src/dom/features.js](http://code.google.com/p/earth-api-utility-library/source/browse/trunk/extensions/src/dom/features.js)

Creates a new folder with the given parameters.

### Parameters: ###
  * **children** _`KmlFeature``[``]`_ (Optional) The children of this folder.
  * **options** _`Object`_  The parameters of the folder to create.
    * **name** _`String`_ (Optional) The name of the feature.
    * **visibility** _`Boolean`_ (Optional) Whether or not the feature should be visible.
    * **description** _`String`_ (Optional) An HTML description for the feature; may be used as balloon text.
    * **children** _`KmlFeature``[``]`_ (Optional) The children of this folder.

### Type: ###
`KmlFolder`


---


## buildGroundOverlay(icon, options) ##

Defined in [src/dom/features.js](http://code.google.com/p/earth-api-utility-library/source/browse/trunk/extensions/src/dom/features.js)

Creates a new ground overlay with the given parameters.

### Parameters: ###
  * **icon** _`String`_ (Optional) The URL of the overlay image.
  * **options** _`Object`_  The parameters of the ground overlay to create.
    * **name** _`String`_ (Optional) The name of the feature.
    * **visibility** _`Boolean`_ (Optional) Whether or not the feature should be visible.
    * **description** _`String`_ (Optional) An HTML description for the feature.
    * **color** _`String`_ (Optional) A color to apply on the overlay.
    * **icon** _`String`_ (Optional) The URL of the overlay image.
    * **drawOrder** _`Number`_ (Optional) The drawing order of the overlay; overlays with higher draw orders appear on top of those with lower draw orders.
    * **altitude** _`Number`_ (Optional) The altitude of the ground overlay, in meters.
    * **altitudeMode** _`KmlAltitudeModeEnum`_ (Optional) The altitude mode of the ground overlay.
    * **box** _`Object`_ (Optional) The bounding box for the overlay.
    * **box.north** _`Number`_ (Optional) The north latitude for the overlay.
    * **box.east** _`Number`_ (Optional) The east longitude for the overlay.
    * **box.south** _`Number`_ (Optional) The south latitude for the overlay.
    * **box.west** _`Number`_ (Optional) The west longitude for the overlay.
    * **box.rotation** _`Number`_ (Optional) The rotation, in degrees, of the overlay.

### Type: ###
`KmlGroundOverlay`


---


## buildLinearRing(path, options) ##

Defined in [src/dom/geometries.js](http://code.google.com/p/earth-api-utility-library/source/browse/trunk/extensions/src/dom/geometries.js)

Creates a new linear ring geometry with the given parameters.

### Parameters: ###
  * **path** _`PathOptions`|`geo.Path`|`KmlLinearRing`_ (Optional) The path data. Anything that can be passed to the geo.Path constructor. The first coordinate doesn't need to be repeated at the end.
  * **options** _`Object`_  The parameters of the linear ring to create.
    * **path** _`PathOptions`|`geo.Path`|`KmlLinearRing`_ (Optional) The path data. Anything that can be passed to the geo.Path constructor. The first coordinate doesn't need to be repeated at the end.
    * **altitudeMode** _`KmlAltitudeModeEnum`_ (Optional) The altitude mode of the geometry.
    * **extrude** _`Boolean`_ (Optional) Whether or not the geometry should extrude down to the Earth's surface.
    * **tessellate** _`Boolean`_ (Optional) Whether or not the geometry should be tessellated (i.e. contour to the terrain).

### Type: ###
`KmlLinearRing`


---


## buildLineString(path, options) ##

Defined in [src/dom/geometries.js](http://code.google.com/p/earth-api-utility-library/source/browse/trunk/extensions/src/dom/geometries.js)

Creates a new line string geometry with the given parameters.

### Parameters: ###
  * **path** _`PathOptions`|`geo.Path`|`KmlLineString`_ (Optional) The path data. Anything that can be passed to the geo.Path constructor.
  * **options** _`Object`_  The parameters of the line string to create.
    * **path** _`PathOptions`|`geo.Path`|`KmlLineString`_ (Optional) The path data. Anything that can be passed to the geo.Path constructor.
    * **altitudeMode** _`KmlAltitudeModeEnum`_ (Optional) The altitude mode of the geometry.
    * **extrude** _`Boolean`_ (Optional) Whether or not the geometry should extrude down to the Earth's surface.
    * **tessellate** _`Boolean`_ (Optional) Whether or not the geometry should be tessellated (i.e. contour to the terrain).

### Type: ###
`KmlLineString`


---


## buildLineStringPlacemark(lineString, options) ##

Defined in [src/dom/features.js](http://code.google.com/p/earth-api-utility-library/source/browse/trunk/extensions/src/dom/features.js)

Convenience method to build a linestring placemark.

### Parameters: ###
  * **lineString** _`LineStringOptions`|`KmlLineString`_  The line string geometry.
  * **options** _`Object`_  The parameters of the placemark to create.

### See: ###

[GEarthExtensions#dom.buildPlacemark](GEarthExtensionsDomReference#buildPlacemark(options).md)


---


## buildLink(href, options) ##

Defined in [src/dom/others.js](http://code.google.com/p/earth-api-utility-library/source/browse/trunk/extensions/src/dom/others.js)

Creates a new link object with the given parameters.

### Parameters: ###
  * **href** _`String`_ (Optional) The link href.
  * **options** _`Object`_  The link parameters.
    * **href** _`String`_ (Optional) The link href.
    * **refreshMode** _`KmlRefreshModeEnum`_ (Optional) The link refresh mode.
    * **refreshInterval** _`Number`_ (Optional) The link refresh interval, in seconds.
    * **viewRefreshMode** _`KmlViewRefreshModeEnum`_ (Optional) The view-based refresh mode.

### Type: ###
`KmlLink`


---


## buildLookAt(point, options) ##

Defined in [src/dom/views.js](http://code.google.com/p/earth-api-utility-library/source/browse/trunk/extensions/src/dom/views.js)

Creates a new lookat object with the given parameters.

### Parameters: ###
  * **point** _`PointSpec`_ (Optional) The point to look at.
  * **options** _`Object`_  The parameters of the lookat object to create.
    * **point** _`PointSpec`_ (Optional) The point to look at.
    * **copy** _`Boolean`_ (Optional) Whether or not to copy parameters from the existing view if they aren't explicitly specified in the options.
    * **heading** _`Number`_ (Optional) The lookat heading/direction.
    * **tilt** _`Number`_ (Optional) The lookat tilt.
    * **range** _`Number`_ (Optional) The range of the camera (distance from the lookat point).

### Type: ###
`KmlLookAt`


---


## buildModel(link, options) ##

Defined in [src/dom/geometries.js](http://code.google.com/p/earth-api-utility-library/source/browse/trunk/extensions/src/dom/geometries.js)

Creates a new model geometry with the given parameters.

### Parameters: ###
  * **link** _`LinkOptions`|`KmlLink`_ (Optional) The remote link this model should use.
  * **options** _`Object`_  The parameters of the model to create.
    * **link** _`LinkOptions`|`KmlLink`_ (Optional) The remote link this model should use.
    * **altitudeMode** _`KmlAltitudeModeEnum`_ (Optional) The altitude mode of the geometry.
    * **location** _`PointOptions`|`geo.Point`_ (Optional) The location of the model.
    * **scale** _`Number`|`Number``[``]`_ (Optional) The scale factor of the model, either as a constant scale, or a 3-item array for x, y, and z scale.
    * **orientation** _`Object`_ (Optional) The orientation of the model.
    * **orientation.heading** _`Number`_ (Optional) The model heading.
    * **orientation.tilt** _`Number`_ (Optional) The model tilt.
    * **orientation.roll** _`Number`_ (Optional) The model roll.

### Type: ###
`KmlModel`


---


## buildMultiGeometry(geometries, options) ##

Defined in [src/dom/geometries.js](http://code.google.com/p/earth-api-utility-library/source/browse/trunk/extensions/src/dom/geometries.js)

Creates a new multi-geometry with the given parameters.

### Parameters: ###
  * **geometries** _`KmlGeometry``[``]`_ (Optional) The child geometries.
  * **options** _`Object`_  The parameters of the multi-geometry to create.
    * **geometries** _`KmlGeometry``[``]`_ (Optional) The child geometries.

### Type: ###
`KmlMultiGeometry`


---


## buildNetworkLink(link, options) ##

Defined in [src/dom/features.js](http://code.google.com/p/earth-api-utility-library/source/browse/trunk/extensions/src/dom/features.js)

Creates a new network link with the given parameters.

### Parameters: ###
  * **link** _`LinkOptions`_ (Optional) An object describing the link to use for this network link.
  * **options** _`Object`_  The parameters of the network link to create.
    * **name** _`String`_ (Optional) The name of the feature.
    * **visibility** _`Boolean`_ (Optional) Whether or not the feature should be visible.
    * **description** _`String`_ (Optional) An HTML description for the feature; may be used as balloon text.
    * **link** _`LinkOptions`_ (Optional) The link to use.

### Type: ###
`KmlNetworkLink`


---


## buildPlacemark(options) ##

Defined in [src/dom/features.js](http://code.google.com/p/earth-api-utility-library/source/browse/trunk/extensions/src/dom/features.js)

Creates a new placemark with the given parameters.

### Parameters: ###
  * **options** _`Object`_  The parameters of the placemark to create.
    * **name** _`String`_ (Optional) The name of the feature.
    * **visibility** _`Boolean`_ (Optional) Whether or not the feature should be visible.
    * **description** _`String`_ (Optional) An HTML description for the feature; may be used as balloon text.
    * **point** _`PointOptions`|`KmlPoint`_ (Optional) A point geometry to use in the placemark.
    * **lineString** _`LineStringOptions`|`KmlLineString`_ (Optional) A line string geometry to use in the placemark.
    * **linearRing** _`LinearRingOptions`|`KmlLinearRing`_ (Optional) A linear ring geometry to use in the placemark.
    * **polygon** _`PolygonOptions`|`KmlPolygon`_ (Optional) A polygon geometry to use in the placemark.
    * **model** _`ModelOptions`|`KmlModel`_ (Optional) A model geometry to use in the placemark.
    * **multiGeometry** _`MultiGeometryOptions`|`KmlMultiGeometry`_ (Optional) A multi-geometry to use in the placemark.
    * **geometries** _`KmlGeometry``[``]`_ (Optional) An array of geometries to add to the placemark.
    * **altitudeMode** _`KmlAltitudeModeEnum`_ (Optional) A convenience property for the placemark geometry's altitude mode.
    * **stockIcon** _`String`_ (Optional) A convenience property to set the point placemark's icon to a stock icon, e.g. 'paddle/wht-blank'. Stock icons reside under 'http://maps.google.com/mapfiles/kml/...'.
    * **style** _`StyleOptions`|`KmlStyleSelector`_ (Optional) The style to use for this placemark. See also GEarthExtensions.dom.buildStyle.
    * **highlightStyle** _`StyleOptions`|`KmlStyleSelector`_ (Optional) The highlight style to use for this placemark. If this option is used, the style and highlightStyle form a style map.
    * **icon** _`IconStyleOptions`_ (Optional) A convenience property to build the point placemark's icon style from the given options.
    * **stockIcon** _`String`_ (Optional) A convenience property to set the point placemark's icon to a stock icon, e.g. 'paddle/wht-blank'. Stock icons reside under 'http://maps.google.com/mapfiles/kml/...'.

### Type: ###
`KmlPlacemark`


---


## buildPoint(point, options) ##

Defined in [src/dom/geometries.js](http://code.google.com/p/earth-api-utility-library/source/browse/trunk/extensions/src/dom/geometries.js)

Creates a new point geometry with the given parameters.

### Parameters: ###
  * **point** _`PointOptions`|`geo.Point`|`KmlPoint`_ (Optional) The point data. Anything that can be passed to the geo.Point constructor.
  * **options** _`Object`_  The parameters of the point object to create.
    * **point** _`PointOptions`|`geo.Point`|`KmlPoint`_ (Optional) The point data. Anything that can be passed to the geo.Point constructor.
    * **altitudeMode** _`KmlAltitudeModeEnum`_ (Optional) The altitude mode of the geometry.
    * **extrude** _`Boolean`_ (Optional) Whether or not the geometry should extrude down to the Earth's surface.

### Type: ###
`KmlPoint`


---


## buildPointPlacemark(point, options) ##

Defined in [src/dom/features.js](http://code.google.com/p/earth-api-utility-library/source/browse/trunk/extensions/src/dom/features.js)

Convenience method to build a point placemark.

### Parameters: ###
  * **point** _`PointOptions`|`KmlPoint`_  The point geometry.
  * **options** _`Object`_  The parameters of the placemark to create.

### See: ###

[GEarthExtensions#dom.buildPlacemark](GEarthExtensionsDomReference#buildPlacemark(options).md)


---


## buildPolygon(polygon, options) ##

Defined in [src/dom/geometries.js](http://code.google.com/p/earth-api-utility-library/source/browse/trunk/extensions/src/dom/geometries.js)

Creates a new polygon geometry with the given parameters.

### Parameters: ###
  * **polygon** _`PolygonOptions`|`geo.Polygon`|`KmlPolygon`_ (Optional) The polygon data. Anything that can be passed to the geo.Polygon constructor.
  * **options** _`Object`_  The parameters of the polygon to create.
    * **polygon** _`PolygonOptions`|`geo.Polygon`|`KmlPolygon`_ (Optional) The polygon data. Anything that can be passed to the geo.Polygon constructor.
    * **altitudeMode** _`KmlAltitudeModeEnum`_ (Optional) The altitude mode of the geometry.
    * **extrude** _`Boolean`_ (Optional) Whether or not the geometry should extrude down to the Earth's surface.
    * **tessellate** _`Boolean`_ (Optional) Whether or not the geometry should be tessellated (i.e. contour to the terrain).

### Type: ###
`KmlPolygon`


---


## buildPolygonPlacemark(polygon, options) ##

Defined in [src/dom/features.js](http://code.google.com/p/earth-api-utility-library/source/browse/trunk/extensions/src/dom/features.js)

Convenience method to build a polygon placemark.

### Parameters: ###
  * **polygon** _`PolygonOptions`|`KmlPolygon`_  The polygon geometry.
  * **options** _`Object`_  The parameters of the placemark to create.

### See: ###

[GEarthExtensions#dom.buildPlacemark](GEarthExtensionsDomReference#buildPlacemark(options).md)


---


## buildRegion(options) ##

Defined in [src/dom/others.js](http://code.google.com/p/earth-api-utility-library/source/browse/trunk/extensions/src/dom/others.js)

Creates a new region with the given parameters.

### Parameters: ###
  * **options** _`Object`_  The parameters of the region to create.
    * **box** _`String`_ (Optional) The bounding box of the region, defined by either N/E/S/W, or center+span, and optional altitudes.
    * **box.north** _`Number`_ (Optional) The north latitude for the region.
    * **box.east** _`Number`_ (Optional) The east longitude for the region.
    * **box.south** _`Number`_ (Optional) The south latitude for the region.
    * **box.west** _`Number`_ (Optional) The west longitude for the region.
    * **box.center** _`PointOptions`|`geo.Point`_ (Optional) The center point for the region's bounding box.
    * **box.span** _`Number`|`Number``[``]`_ (Optional) If using center+span region box definition, this is either a number indicating both latitude and longitude span, or a 2-item array defining [latSpan, lngSpan].
    * **box.minAltitude** _`Number`_ (Optional) The low altitude for the region.
    * **box.maxAltitude** _`Number`_ (Optional) The high altitude for the region.
    * **box.altitudeMode** _`KmlAltitudeModeEnum`_ (Optional) The altitude mode of the region, pertaining to min and max altitude.
    * **lod** _`Number``[``]`_ (Optional) An array of values indicating the LOD range for the region. The array can either contain 2 values, i.e. [minLodPixels, maxLodPixels], or 4 values to indicate fade extents, i.e. [minLodPixels, minFadeExtent, maxFadeExtent, maxLodPixels].

### Type: ###
`KmlRegion`


---


## buildScreenOverlay(icon, options) ##

Defined in [src/dom/features.js](http://code.google.com/p/earth-api-utility-library/source/browse/trunk/extensions/src/dom/features.js)

Creates a new screen overlay with the given parameters.

### Parameters: ###
  * **icon** _`String`_ (Optional) The URL of the overlay image.
  * **options** _`Object`_  The parameters of the screen overlay to create.
    * **name** _`String`_ (Optional) The name of the feature.
    * **visibility** _`Boolean`_ (Optional) Whether or not the feature should be visible.
    * **description** _`String`_ (Optional) An HTML description for the feature.
    * **color** _`String`_ (Optional) A color to apply on the overlay.
    * **icon** _`String`_ (Optional) The URL of the overlay image.
    * **drawOrder** _`Number`_ (Optional) The drawing order of the overlay; overlays with higher draw orders appear on top of those with lower draw orders.
    * **overlayXY** _`Vec2Src`_ (Optional) The registration point in the overlay that will be placed at the given screenXY point and potentially rotated about. This object will be passed to [GEarthExtensions#dom.setVec2](GEarthExtensionsDomReference#setVec2(vec2,_options).md). The default is the top left of the overlay. Note that the behavior of overlayXY in [GEarthExtensions](GEarthExtensionsReference.md) is KML-correct; whereas in the Earth API overlayXY and screenXY are swapped.
    * **screenXY** _`Vec2Src`_  The position in the plugin window that the screen overlay should appear at. This object will be passed to [GEarthExtensions#dom.setVec2](GEarthExtensionsDomReference#setVec2(vec2,_options).md). Note that the behavior of overlayXY in [GEarthExtensions](GEarthExtensionsReference.md) is KML-correct; whereas in the Earth API overlayXY and screenXY are swapped.
    * **size** _`Vec2Src`_  The size of the overlay. This object will be passed to [GEarthExtensions#dom.setVec2](GEarthExtensionsDomReference#setVec2(vec2,_options).md).
    * **altitudeMode** _`KmlAltitudeModeEnum`_ (Optional) The altitude mode of the ground overlay.
    * **rotation** _`Number`_ (Optional) The rotation of the overlay, in degrees.

### Type: ###
`KmlScreenOverlay`


---


## buildStyle(options) ##

Defined in [src/dom/styles.js](http://code.google.com/p/earth-api-utility-library/source/browse/trunk/extensions/src/dom/styles.js)

Creates a new style with the given parameters.

### Parameters: ###
  * **options** _`Object`_  The style parameters.
    * **icon** _`String`|`Object`_ (Optional) The icon href or an icon object literal.
    * **icon.href** _`String`_ (Optional) The icon href.
    * **icon.stockIcon** _`String`_ (Optional) A convenience property to set the icon to a stock icon, e.g. 'paddle/wht-blank'. Stock icons reside under 'http://maps.google.com/mapfiles/kml/...'.
    * **icon.scale** _`Number`_ (Optional) The icon scaling factor.
    * **icon.color** _`ColorSpec`_ (Optional) The color of the icon.
    * **icon.opacity** _`ColorSpec`_ (Optional) The opacity of the icon, between 0.0 and 1.0. This is a convenience property, since opacity can be defined in the color.
    * **icon.hotSpot** _`Vec2Options`|`KmlVec2`_ (Optional) The hot sopt of the icon, as a KmlVec2, or as an options literal to pass to3 GEarthExtensions.dom.setVec2.
    * **label** _`ColorSpec`|`Object`_ (Optional) The label color or a label object literal.
    * **label.scale** _`Number`_ (Optional) The label scaling factor.
    * **label.color** _`ColorSpec`_ (Optional) The color of the label.
    * **icon.opacity** _`ColorSpec`_ (Optional) The opacity of the label, between 0.0 and 1.0. This is a convenience property, since opacity can be defined in the color.
    * **line** _`ColorSpec`|`Object`_ (Optional) The line color or a line object literal.
    * **line.width** _`Number`_ (Optional) The line width.
    * **line.color** _`ColorSpec`_ (Optional) The line color.
    * **icon.opacity** _`ColorSpec`_ (Optional) The opacity of the line, between 0.0 and 1.0. This is a convenience property, since opacity can be defined in the color.
    * **poly** _`ColorSpec`|`Object`_ (Optional) The polygon color or a polygon style object literal.
    * **poly.fill** _`Boolean`_ (Optional) Whether or not the polygon will be filled.
    * **poly.outline** _`Boolean`_ (Optional) Whether or not the polygon will have an outline.
    * **poly.color** _`ColorSpec`_ (Optional) The color of the polygon fill.
    * **icon.opacity** _`ColorSpec`_ (Optional) The opacity of the polygon, between 0.0 and 1.0. This is a convenience property, since opacity can be defined in the color.
    * **balloon** _`ColorSpec`|`Object`_ (Optional) The balloon bgColor or a balloon style object literal.
    * **balloon.bgColor** _`Boolean`_ (Optional) The balloon background color.
    * **balloon.textColor** _`Boolean`_ (Optional) The balloon text color.
    * **balloon.text** _`String`_ (Optional) The balloon text template.

### Type: ###
`KmlStyle`


---


## clearFeatures() ##

Defined in [src/dom/utils.js](http://code.google.com/p/earth-api-utility-library/source/browse/trunk/extensions/src/dom/utils.js)

Removes all top-level features from the Earth object's DOM.


---


## computeBounds(object) ##

Defined in [src/dom/utils.js](http://code.google.com/p/earth-api-utility-library/source/browse/trunk/extensions/src/dom/utils.js)

Computes the latitude/longitude bounding box for the given object. Note that this method walks the object's DOM, so may have poor performance for large objects.

### Parameters: ###
  * **object** _`KmlFeature`|`KmlGeometry`_  The feature or geometry whose bounds should be computed.

### Type: ###
`geo.Bounds`


---


## getObjectById(id, options) ##

Defined in [src/dom/utils.js](http://code.google.com/p/earth-api-utility-library/source/browse/trunk/extensions/src/dom/utils.js)

Gets the object in the Earth DOM with the given id.

### Parameters: ###
  * **id** _`String`_  The id of the object to retrieve.
  * **options**

### Returns: ###

Returns the object with the given id, or null if it was not found.


---


## removeObject(object) ##

Defined in [src/dom/utils.js](http://code.google.com/p/earth-api-utility-library/source/browse/trunk/extensions/src/dom/utils.js)

Removes the given object from the Earth object's DOM.

### Parameters: ###
  * **object** _`KmlObject`_  The object to remove.


---


## setVec2(vec2, options) ##

Defined in [src/dom/utils.js](http://code.google.com/p/earth-api-utility-library/source/browse/trunk/extensions/src/dom/utils.js)

Sets the given KmlVec2 object to the point defined in the options.

### Parameters: ###
  * **vec2** _`KmlVec2`_  The object to set, for example a screen overlay's screenXY.
  * **options** _`Object`|`KmlVec2`_  The options literal defining the point, or an existing KmlVec2 object to copy.
    * **left** _`Number`|`String`_ (Optional) The left offset, in pixels (i.e. 5), or as a percentage (i.e. '25%').
    * **top** _`Number`|`String`_ (Optional) The top offset, in pixels or a string percentage.
    * **right** _`Number`|`String`_ (Optional) The right offset, in pixels or a string percentage.
    * **bottom** _`Number`|`String`_ (Optional) The bottom offset, in pixels or a string percentage.
    * **width** _`Number`|`String`_ (Optional) A convenience parameter specifying width, only useful for screen overlays, in pixels or a string percentage.
    * **height** _`Number`|`String`_ (Optional) A convenience parameter specifying height, only useful for screen overlays, in pixels or a string percentage.


---


## walk(options) ##

Defined in [src/dom/utils.js](http://code.google.com/p/earth-api-utility-library/source/browse/trunk/extensions/src/dom/utils.js)

Walks a KML object, calling a given visit function for each object in the KML DOM. The lone argument must be either a visit function or an options literal. NOTE: walking the DOM can have pretty poor performance on very large hierarchies, as first time accesses to KML objects from JavaScript incur some overhead in the API.

### Parameters: ###
  * **options** _`Object`_ (Optional) The walk options:
    * **visitCallback** _`Function`_ (Optional) The function to call upon visiting a node in the DOM. The 'this' variable in the callback function will be bound to the object being visited. The lone argument passed to this function will be an object literal for the call context. To get the current application-specific call context, use the 'current' property of the context object. To set the context for all child calls, set the 'child' property of the context object.To prevent walking the children of the current object, set the 'walkChildren' property of the context object to false. To stop the walking process altogether, return false in the function.
    * **rootObject** _`KmlObject`_ (Optional) The root of the KML object hierarchy to walk.
    * **features** _`Boolean`_ (Optional) Descend into feature containers? Default true.
    * **geometries** _`Boolean`_ (Optional) Descend into geometry containers? Default false.
    * **rootContext** _`Object`_ (Optional) The application-specific context to pass to the root item.
