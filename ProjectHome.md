Utility libraries for the [Google Earth API](http://code.google.com/apis/earth).

# GEarthExtensions #

[GEarthExtensions](http://code.google.com/p/earth-api-utility-library/source/browse/#svn/trunk/extensions) is the main utility library in this project. Other libraries may sneak into this hosting project later, but `GEarthExtensions` will be the main focus.

## Dependencies ##

  * [geojs](http://code.google.com/p/geojs)
  * Google Earth API v1.003+
  * Google Earth Plug-in 5.1.x.x

## Documentation ##

  * [Example code](http://earth-api-utility-library.googlecode.com/svn/trunk/extensions/examples/)
  * [GEarthExtensions Reference](http://code.google.com/p/earth-api-utility-library/wiki/GEarthExtensionsReference)

## Usage ##

NOTE: make sure you're familiar with the Earth API's [Hello Earth](http://earth-api-samples.googlecode.com/svn/trunk/demos/helloearth/index.html) demo and perhaps even the [other demos in the demo gallery](http://code.google.com/apis/earth/documentation/demogallery.html).

First [download](http://code.google.com/p/earth-api-utility-library/downloads/list) the `GEarthExtensions` library and include it via a `<script>` tag:

```
<script src="http://www.example.com/static/js/extensions-0.2.1.pack.js"></script>
```

Make sure to enable [GZip compression over HTTP](http://www.google.com/search?q=gzip+http+compression) in your web server configuration to get maximum compression.

Alternatively, you can link directly to [an official release](http://earth-api-utility-library.googlecode.com/svn/tags/extensions-0.2.1/dist/extensions.pack.js) or if you like to live life on the edge, to the [trunk](http://earth-api-utility-library.googlecode.com/svn/trunk/extensions/dist/extensions.pack.js). Note that you won't reap the benefits of GZip compression over HTTP if you do this.

Then, in your `google.earth.createInstance` success callback:

```
google.earth.createInstance(successCallback);

function successCallback(pluginInstance) {
  ge = pluginInstance;
  ge.getWindow().setVisibility(true);

  var gex = new GEarthExtensions(ge);
  gex.dom.addPointPlacemark(gex.util.getLookAt(), { name: 'Hello World!' });
}
```

## Video ##

A video introducing the utility library from [Google I/O 2009](http://code.google.com/events/io/):

<a href='http://www.youtube.com/watch?feature=player_embedded&v=H7fxHp7oHcI' target='_blank'><img src='http://img.youtube.com/vi/H7fxHp7oHcI/0.jpg' width='425' height=344 /></a>