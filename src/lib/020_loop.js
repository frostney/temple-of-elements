(function(root) {
  'use strict';

  var loopEvents = new EventMap();
  var pausedEvents = {};

  /**
   * @class Loop
   * @static
   */
  var Loop = (function () {

    var isRunning = true;

    /**
     * @method run
     */
    var run = function () {
      var time;

      (function loop() {
        requestAnimationFrame(loop);

        var now = performance.now() || Date.now();
        var dt = now - (time || now);

        time = now;

        if (!isRunning) {
          return;
        }

        var eventKeys = Object.keys(loopEvents.events);

        for (var i = 0, j = eventKeys.length; i < j; i++) {
          (function (key) {
            if (!pausedEvents[key]) {
              loopEvents.trigger(key, dt);
            }
          })(eventKeys[i]);
        }
      })();
    };

    /**
     * @method stop
     */
    var stop = function () {
      isRunning = false;
    };

    var clear = function () {
      loopEvents.clear();
      pausedEvents = {};
    };

    var before = function(taskName, taskFunction) {
      loopEvents.before(taskName, taskFunction);
    };

    var after = function(taskName, taskFunction) {
      loopEvents.after(taskName, taskFunction);
    };

    var on = function (taskName, taskFunction) {
      loopEvents.on(taskName, taskFunction);
      pausedEvents[taskName] = false;
    };

    var off = function (taskName) {
      loopEvents.off(taskName);
      if (pausedEvents[taskName] != null) {
        delete pausedEvents[taskName];
      }
    };

    var pause = function (taskName) {
      pausedEvents[taskName].paused = true;
    };

    var resume = function (taskName) {
      if (taskName == null) {
        isRunning = true;
        return;
      }

      pausedEvents[taskName].paused = false;
    };


    return {
      run: run,

      stop: stop,
      clear: clear,

      on: on,
      off: off,

      before: before,
      after: after,

      pause: pause,
      resume: resume
    };
  })();

  root.Loop = Loop;

})(window);