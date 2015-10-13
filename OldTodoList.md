  * Figure out how to get aspect ratio or width/height of plugin viewport
  * icon href multiple hotspots + computedstyle for hotspot bounce vs. altitude bounce}
  * Common resource files -- edit linestring coord image
  * tests for:
    * view serialization
    * getObjectById
    * take over camera
    * math3d
  * gex
    * Release 0.2
    * Move jsdata to its own namespace gex.meta or gex.jsdata
    * gex.dom
      * setProperty using dom builder
    * gex.edit
      * Unify editlinestring and makedraggable
      * ground overlays
        * tiepoint/latlonquad calculation using Michael WM's code
      * 3d models
    * gex.ui
      * gex.ui.createHTMLControl() --- iframe shim
      * gex.ui.createControl -- screen-overlay based controls
        * screen overlay + fake "done" button - needs customizable mouse cursors.
    * gex.fx
      * bounce using hotSpot animation, not altitude animation
        * requires getComputedStyle
    * geojson parsing
  * geojs
    * degrees, minutes seconds < -- > decimal degree
    * 3d earth distance
    * geo.Polygon
      * perimeter
      * union/intersection?
      * convex hull
    * geo.Path
      * Best fit path given set of points
      * calculate point on path closest to some other point -- useful for snap-to-path
    * geo.srs (spatial reference system) - WGS84 vs. projections?
      * UTM/UPS
      * MGRS (military)
      * coordinate systems (OSGB 36, lat/lon WGS 84, UTM WGS 84)
    * geo.proj
      * projections (mercator, plate caree, etc)
      * lat/lng < -- > mercator x/y
    * geo.hash - geohashing
      * geo.hash.toPoint('as1231f')
      * geo.hash.fromPoint(new geo.Point(37, -122))