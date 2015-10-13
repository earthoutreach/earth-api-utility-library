Defined in [src/fx/\_baseanim\_.js](http://code.google.com/p/earth-api-utility-library/source/browse/trunk/extensions/src/fx/_baseanim_.js)

Generic class for animations of a fixed duration.

Extends [GEarthExtensions.fx.Animation](GEarthExtensionsFxAnimationReference.md)




---

# Class Constructor #

## GEarthExtensions.fx.TimedAnimation(duration, renderCallback, completionCallback) ##

### Parameters: ###
  * **duration** _`Number`_  The length of time for which this animation should run, in seconds.
  * **renderCallback** _`Function`_  A method that will be called to render a frame of the animation. Its sole parameter will be the time, in seconds, of the frame to render.
  * **completionCallback** _`Function`_ (Optional) A callback method to fire when the animation is completed/stopped. The callback will receive an object literal argument that will contain a 'cancelled' boolean value that will be true if the effect was cancelled.


---

# Methods #

## renderFrame(time) ##

Render the frame at the given time after the animation was started.

### Parameters: ###
  * **time** _`Number`_  The time of the frame to render, in seconds.


---

# Inherited Methods #

## rewind() ##

Stop and rewind the animation to the frame at time t=0.


---


## stop(completed) ##

Stop this animation.

### Parameters: ###
  * **completed** _`Boolean`_ (Optional, Default: true) Whether or not the animation is being stopped due to a successful completion. If not, the stop call is treated as a cancellation of the animation.


---


## start() ##

Start this animation.
