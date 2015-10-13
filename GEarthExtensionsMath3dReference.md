Defined in [src/math3d/\_header.js](http://code.google.com/p/earth-api-utility-library/source/browse/trunk/extensions/src/math3d/_header.js)

Contains methods for 3D math, including linear algebra/geo bindings.




---

# Static Methods #

## htrToLocalFrame(htr) ##

Defined in [src/math3d/angles.js](http://code.google.com/p/earth-api-utility-library/source/browse/trunk/extensions/src/math3d/angles.js)

Converts heading, tilt, and roll (HTR) to a local orientation matrix that transforms global direction vectors to local direction vectors.

### Parameters: ###
  * **htr** _`Number``[``]`_  A heading, tilt, roll array, where each angle is in degrees.

### Type: ###
`geo.linalg.Matrix`

### Returns: ###

_`geo.linalg.Matrix`_ A local orientation matrix.


---


## localFrameToHtr(matrix) ##

Defined in [src/math3d/angles.js](http://code.google.com/p/earth-api-utility-library/source/browse/trunk/extensions/src/math3d/angles.js)

Converts a local orientation matrix (right, dir, up vectors) in local cartesian coordinates to heading, tilt, and roll.

### Parameters: ###
  * **matrix** _`geo.linalg.Matrix`_  A local orientation matrix.

### Type: ###
`Number``[``]`

### Returns: ###

_`Number``[``]`_ A heading, tilt, roll array, where each angle is in degrees.


---


## makeLocalToGlobalFrame(point) ##

Defined in [src/math3d/orientation.js](http://code.google.com/p/earth-api-utility-library/source/browse/trunk/extensions/src/math3d/orientation.js)

Creates a local orientation matrix that can transform direction vectors local to a given point to global direction vectors. The transpose of the returned matrix performs the inverse transformation.

### Parameters: ###
  * **point** _`geo.Point`_  The world point at which local coordinates are to be transformed.

### Type: ###
`geo.linalg.Matrix`

### Returns: ###

_`geo.linalg.Matrix`_ An orientation matrix that can transform local coordinate vectors to global coordinate vectors.


---


## makeOrthonormalFrame(dir, up) ##

Defined in [src/math3d/orientation.js](http://code.google.com/p/earth-api-utility-library/source/browse/trunk/extensions/src/math3d/orientation.js)

Creates an orthonormal orientation matrix for a given set of object direction and up vectors. The matrix rows will each be unit length and orthogonal to each other. If the dir and up vectors are collinear, this function will fail and return null.

### Parameters: ###
  * **dir** _`geo.linalg.Vector`_  The object direction vector.
  * **up** _`geo.linalg.Vector`_  The object up vector.

### Type: ###
`geo.linalg.Matrix`

### Returns: ###

_`geo.linalg.Matrix`_ Returns the orthonormal orientation matrix, or null if none is possible.
