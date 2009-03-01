/*
Copyright 2008 Google Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
/** @ignore */
GEarthExtensions.prototype.dom.createFeature_ = GEarthExtensions.domBuilder_({
  propertySpec: {
    name: GEarthExtensions.AUTO,
    visibility: GEarthExtensions.AUTO,
    description: GEarthExtensions.AUTO,
    snippet: GEarthExtensions.AUTO
  }
});

/**
 * Creates a new placemark with the given parameters.
 * @function
 * @param {object} options The parameters of the placemark to create.
 * @param {string} [options.name] The name of the feature.
 * @param {boolean} [options.visibility] Whether or not the feature should
 *     be visible.
 * @param {string} [options.description] An HTML description for the feature;
 *     may be used as balloon text.
 * @param {PointSpec} [options.point] A point geometry to use in the placemark.
 * @param {LineStringSpec} [options.lineString] A line string geometry to use
 *     in the placemark.
 * @param {LinearRingSpec} [options.linearRing] A linear ring geometry to use
 *     in the placemark.
 * @param {PolygonSpec} [options.polygon] A polygon geometry to use
 *     in the placemark.
 * @param {ModelSpec} [options.model] A model geometry to use
 *     in the placemark.
 * @param {MultiGeometrySpec} [options.geometries] A multi-geometry to use
 *     in the placemark.
 * @type KmlPlacemark
 */
// TODO: document styling
GEarthExtensions.prototype.dom.createPlacemark = GEarthExtensions.domBuilder_({
  apiInterface: 'KmlPlacemark',
  base: GEarthExtensions.prototype.dom.createFeature_,
  apiFactoryFn: 'createPlacemark',
  propertySpec: {
    // allowed geometries
    point: GEarthExtensions.ALLOWED,
    lineString: GEarthExtensions.ALLOWED,
    linearRing: GEarthExtensions.ALLOWED,
    polygon: GEarthExtensions.ALLOWED,
    model: GEarthExtensions.ALLOWED,
    geometries: GEarthExtensions.ALLOWED,
    
    // styling
    stockIcon: GEarthExtensions.ALLOWED,
    icon: GEarthExtensions.ALLOWED,
    style: GEarthExtensions.ALLOWED,
    highlightStyle: GEarthExtensions.ALLOWED
  },
  constructor: function(placemarkObj, options) {
    // geometries
    var geometries = [];
    if (options.point) {
      geometries.push(this.dom.createPoint(options.point));
    }
    if (options.lineString) {
      geometries.push(this.dom.createLineString(options.lineString));
    }
    if (options.linearRing) {
      geometries.push(this.dom.createLinearRing(options.linearRing));
    }
    if (options.polygon) {
      geometries.push(this.dom.createPolygon(options.polygon));
    }
    if (options.model) {
      geometries.push(this.dom.createModel(options.model));
    }
    if (options.geometries) {
      geometries = geometries.concat(options.geometries);
    }
  
    if (geometries.length > 1) {
      placemarkObj.setGeometry(this.dom.createMultiGeometry(geometries));
    } else if (geometries.length == 1) {
      placemarkObj.setGeometry(geometries[0]);
    }
  
    // set styles
    if (options.stockIcon) {
      options.icon = options.icon || {};
      options.icon.stockIcon = options.stockIcon;
    }
  
    if (options.icon) {
      if (!options.style) {
        options.style = {};
      }
    
      options.style.icon = options.icon;
    }
  
    // NOTE: for this library, allow EITHER a style or a styleUrl, not both..
    // if you want both, you'll have to do it manually
    if (options.style) {
      if (options.highlightStyle) {
        // style map
        var styleMap = this.pluginInstance.createStyleMap(options.id);
      
        // set normal style
        if (typeof options.style == 'string') {
          styleMap.setNormalStyleUrl(options.style);
        } else {
          styleMap.setNormalStyle(this.dom.createStyle(options.style));
        }
      
        // set highlight style
        if (typeof options.highlightStyle == 'string') {
          styleMap.setHighlightStyleUrl(options.highlightStyle);
        } else {
          styleMap.setHighlightStyle(this.dom.createStyle(
              options.highlightStyle));
        }
      
        // assign style map
        placemarkObj.setStyleSelector(styleMap);
      } else {
        // single style
        if (typeof options.style == 'string') {
          placemarkObj.setStyleUrl(options.style);
        } else {
          placemarkObj.setStyleSelector(this.dom.createStyle(options.style));
        }
      }
    }
  }
});
/***IGNORE_BEGIN***/
function test_dom_createPlacemark() {
  // TODO: make this the best unit test it possibly can be!
  var placemark = testext_.dom.createPlacemark({
    name: 'foo',
    point: [37, -122],
    lineString: [[0, 0], [1, 1]],
    stockIcon: 'blu-circle',
    style: {
      line: '#00f'
    }
  });
  
  assertEquals('KmlMultiGeometry', placemark.getGeometry().getType());
  assertEquals('foo', placemark.getName());
  
  var geoms = placemark.getGeometry().getGeometries();
  assertEquals('KmlPoint', geoms.getChildNodes().item(0).getType());
  assertEquals('KmlLineString', geoms.getChildNodes().item(1).getType());
  
  assertEquals(37, geoms.getChildNodes().item(0).getLatitude());
  assertEquals(-122, geoms.getChildNodes().item(0).getLongitude());
  
  assertEquals(0, geoms.getChildNodes().item(1).getCoordinates().
      get(0).getLatitude());
  assertEquals(0, geoms.getChildNodes().item(1).getCoordinates().
      get(0).getLongitude());
  assertEquals(1, geoms.getChildNodes().item(1).getCoordinates().
      get(1).getLatitude());
  assertEquals(1, geoms.getChildNodes().item(1).getCoordinates().
      get(1).getLongitude());
}

function test_dom_createPlacemark_styles() {
  var style1 = testext_.dom.createStyle({
      id: 'test1', icon: { stockIcon: 'wht-blank' }});
  testplugin_.getFeatures().appendChild(style1);
  
  var style2 = testext_.dom.createStyle({
      id: 'test2', icon: { stockIcon: 'wht-blank' }});
  testplugin_.getFeatures().appendChild(style2);
  
  // test a stylemap with shared style pair values
  var placemark = testext_.dom.createPointPlacemark([37, -122], {
    style: '#test1',
    highlightStyle: '#test2'
  });
  
  assertEquals('KmlStyleMap', placemark.getStyleSelector().getType());
  assertEquals('#test1', placemark.getStyleSelector().getNormalStyleUrl());
  assertEquals('#test2', placemark.getStyleSelector().getHighlightStyleUrl());
  
  // test stock icons and inline highlight styles
  placemark = testext_.dom.createPointPlacemark([37, -122], {
    style: { icon: { stockIcon: 'blu-circle', scale: 2.0 } },
    highlightStyle: { icon: { stockIcon: 'red-circle', scale: 2.5 } }
  });
  
  assertEquals('KmlStyleMap', placemark.getStyleSelector().getType());
  assertEquals('KmlStyle', placemark.getStyleSelector().
      getNormalStyle().getType());
  assertEquals('KmlStyle', placemark.getStyleSelector().
      getHighlightStyle().getType());
  if (placemark.getStyleSelector().getNormalStyle().getIconStyle().
      getIcon().getHref().indexOf('blu-circle') < 0) {
    fail('Stock icon was not properly set');
  }
  assertEquals(2.0, placemark.getStyleSelector().getNormalStyle().
      getIconStyle().getScale());
  assertEquals(2.5, placemark.getStyleSelector().getHighlightStyle().
      getIconStyle().getScale());
  
  // test label style
  placemark = testext_.dom.createPointPlacemark([37, -122], {
    style: { label: { scale: 5 } }
  });

  assertEquals('KmlStyle', placemark.getStyleSelector().getType());
  assertEquals(5.0, placemark.getStyleSelector().getLabelStyle().getScale());
      
  // test poly style
  placemark = testext_.dom.createPolygonPlacemark([ [0,0], [0,1], [1,1] ], {
    style: { poly: { color: '#06f', fill: true, outline: true } }
  });
  
  assertEquals('KmlStyle', placemark.getStyleSelector().getType());
  assertTrue(placemark.getStyleSelector().getPolyStyle().getFill());
  assertTrue(placemark.getStyleSelector().getPolyStyle().getOutline());
  assertEquals('ffff6600',
      placemark.getStyleSelector().getPolyStyle().getColor().get());

  // test line style
  placemark = testext_.dom.createLineStringPlacemark([ [0,0], [0,1], [1,1] ], {
    style: { line: { color: '#fc6', width: 5 } }
  });

  assertEquals('KmlStyle', placemark.getStyleSelector().getType());
  assertEquals(5.0, placemark.getStyleSelector().getLineStyle().getWidth());
  assertEquals('ff66ccff',
      placemark.getStyleSelector().getLineStyle().getColor().get());
}
/***IGNORE_END***/

/**
 * @see GEarthExtensions#dom.createPlacemark
 * @function
 */
GEarthExtensions.prototype.dom.createPointPlacemark =
GEarthExtensions.domBuilder_({
  base: GEarthExtensions.prototype.dom.createPlacemark,
  defaultProperty: 'point'
});

/**
 * @see GEarthExtensions#dom.createPlacemark
 * @function
 */
GEarthExtensions.prototype.dom.createLineStringPlacemark =
GEarthExtensions.domBuilder_({
  base: GEarthExtensions.prototype.dom.createPlacemark,
  defaultProperty: 'lineString'
});

/**
 * @see GEarthExtensions#dom.createPlacemark
 * @function
 */
GEarthExtensions.prototype.dom.createPolygonPlacemark =
GEarthExtensions.domBuilder_({
  base: GEarthExtensions.prototype.dom.createPlacemark,
  defaultProperty: 'polygon'
});


/**
 * Creates a new network link with the given parameters.
 * @function
 * @param {LinkSpec} [link] An object describing the link to use for this
 *     network link.
 * @param {object} options The parameters of the network link to create.
 * @param {string} [options.name] The name of the feature.
 * @param {boolean} [options.visibility] Whether or not the feature should
 *     be visible.
 * @param {string} [options.description] An HTML description for the feature;
 *     may be used as balloon text.
 * @param {LinkSpec} [options.link] The link to use.
 * @type KmlNetworkLink
 */
GEarthExtensions.prototype.dom.createNetworkLink =
GEarthExtensions.domBuilder_({
  apiInterface: 'KmlNetworkLink',
  base: GEarthExtensions.prototype.dom.createFeature_,
  apiFactoryFn: 'createNetworkLink',
  defaultProperty: 'link',
  propertySpec: {
    link: GEarthExtensions.ALLOWED,
    
    // auto properties
    flyToView: GEarthExtensions.AUTO,
    refreshVisibility: GEarthExtensions.AUTO
  },
  constructor: function(networkLinkObj, options) {
    if (options.link) {
      networkLinkObj.setLink(this.dom.createLink(options.link));
    }
  }
});
// TODO: unit tests

/** @ignore */
GEarthExtensions.prototype.dom.createContainer_ = GEarthExtensions.domBuilder_({
  base: GEarthExtensions.prototype.dom.createFeature_,
  propertySpec: {
    children: GEarthExtensions.ALLOWED
  },
  constructor: function(containerObj, options) {
    // children
    if (options.children) {
      for (var i = 0; i < options.children.length; i++) {
        containerObj.getFeatures().appendChild(options.children[i]);
      }
    }  
  }
});

/**
 * Creates a new folder with the given parameters.
 * @function
 * @param {KmlFeature[]} [children] The children of this folder.
 * @param {object} options The parameters of the folder to create.
 * @param {string} [options.name] The name of the feature.
 * @param {boolean} [options.visibility] Whether or not the feature should
 *     be visible.
 * @param {string} [options.description] An HTML description for the feature;
 *     may be used as balloon text.
 * @param {KmlFeature[]} [options.children] The children of this folder.
 * @type KmlFolder
 */
GEarthExtensions.prototype.dom.createFolder = GEarthExtensions.domBuilder_({
  apiInterface: 'KmlFolder',
  base: GEarthExtensions.prototype.dom.createContainer_,
  apiFactoryFn: 'createFolder',
  defaultProperty: 'children'
});
// TODO: unit tests

/**
 * Creates a new document with the given parameters.
 * @function
 * @param {KmlFeature[]} [children] The children of this document.
 * @param {object} options The parameters of the document to create.
 * @param {string} [options.name] The name of the feature.
 * @param {boolean} [options.visibility] Whether or not the feature should
 *     be visible.
 * @param {string} [options.description] An HTML description for the feature;
 *     may be used as balloon text.
 * @param {KmlFeature[]} [options.children] The children of this document.
 * @type KmlDocument
 */
GEarthExtensions.prototype.dom.createDocument = GEarthExtensions.domBuilder_({
  apiInterface: 'KmlDocument',
  base: GEarthExtensions.prototype.dom.createContainer_,
  apiFactoryFn: 'createDocument',
  defaultProperty: 'children'
});
// TODO: unit tests

/** @ignore */
GEarthExtensions.prototype.dom.createOverlay_ = GEarthExtensions.domBuilder_({
  base: GEarthExtensions.prototype.dom.createFeature_,
  propertySpec: {
    color: GEarthExtensions.ALLOWED,
    icon: GEarthExtensions.ALLOWED,
    
    // auto properties
    drawOrder: GEarthExtensions.AUTO
  },
  constructor: function(overlayObj, options) {
    // color
    if (options.color) {
      overlayObj.getColor().set(GEarthExtensions.parseColor(options.color));
    }
  
    // icon
    if (options.icon) {
      var icon = this.pluginInstance.createIcon('');
      overlayObj.setIcon(icon);
    
      if (typeof options.icon == 'string') {
        // default just icon href
        icon.setHref(options.icon);
      }
    }
  }
});

/**
 * Creates a new ground overlay with the given parameters.
 * @function
 */
// TODO: documentation
GEarthExtensions.prototype.dom.createGroundOverlay =
GEarthExtensions.domBuilder_({
  apiInterface: 'KmlGroundOverlay',
  base: GEarthExtensions.prototype.dom.createOverlay_,
  apiFactoryFn: 'createGroundOverlay',
  defaultProperty: 'icon',
  propertySpec: {
    // required properties
    box: GEarthExtensions.REQUIRED,
    
    // auto properties
    altitude: GEarthExtensions.AUTO,
    altitudeMode: GEarthExtensions.AUTO
  },
  constructor: function(groundOverlayObj, options) {
    if (options.box) {
      // TODO: exception if any of the options are missing
      var box = this.pluginInstance.createLatLonBox('');
      box.setBox(options.box.north, options.box.south,
                 options.box.east, options.box.west,
                 options.box.rotation ? options.box.rotation : 0);
      groundOverlayObj.setLatLonBox(box);
    }
  }
});
/***IGNORE_BEGIN***/
function test_dom_createGroundOverlay() {
  var groundOverlay = testext_.dom.createGroundOverlay({
    name: 'foo',
    icon: 'http://earth-api-samples.googlecode.com/svn/trunk/examples/' +
          'static/texture0.png',
    drawOrder: 2,
    box: {
      north: 1,
      east: 1,
      south: -1,
      west: -1,
      rotation: 45
    },
    altitudeMode: testplugin_.ALTITUDE_RELATIVE_TO_GROUND,
    altitude: 100000
  });
  
  assertEquals('KmlGroundOverlay', groundOverlay.getType());
  assertEquals('foo', groundOverlay.getName());
  
  if (groundOverlay.getIcon().getHref().indexOf('texture0.png') < 0) {
    fail('Ground overlay was not assigned an image/icon');
  }
  
  assertEquals(2, groundOverlay.getDrawOrder());
  assertEquals(1, groundOverlay.getLatLonBox().getNorth());
  assertEquals(1, groundOverlay.getLatLonBox().getEast());
  assertEquals(-1, groundOverlay.getLatLonBox().getSouth());
  assertEquals(-1, groundOverlay.getLatLonBox().getWest());
  assertEquals(45, groundOverlay.getLatLonBox().getRotation());
        
  assertEquals(testplugin_.ALTITUDE_RELATIVE_TO_GROUND,
      groundOverlay.getAltitudeMode());
  assertEquals(100000, groundOverlay.getAltitude());
}
/***IGNORE_END***/


//////////////////////////////
// GEarthExtensions#dom shortcut functions

(function(){
  var autoShortcut = ['Placemark',
                      'PointPlacemark', 'LineStringPlacemark',
                      'PolygonPlacemark',
                      'Folder', 'NetworkLink', 'GroundOverlay', 'Style'];
  for (var i = 0; i < autoShortcut.length; i++) {
    GEarthExtensions.prototype.dom['add' + autoShortcut[i]] =
      function(shortcutBase) {
        return function() {
          var obj = this.dom['create' + shortcutBase].apply(null, arguments);
          this.pluginInstance.getFeatures().appendChild(obj);
          return obj;
        };
    }(autoShortcut[i]); // escape closure
  }
})();