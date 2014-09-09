(function (root) {
  var performance, vendors, x, _i, _len;
  performance = root.performance || {};
  vendors = ['ms', 'moz', 'webkit', 'o'];
  if (!performance.now) {
    for (_i = 0, _len = vendors.length; _i < _len; _i++) {
      x = vendors[_i];
      performance.now = performance["" + x + "Now"];
      if (performance.now) {
        break;
      }
    }
  }
  if (!performance.now) {
    performance.now = function () {
      return (typeof Date.now === "function" ? Date.now() : void 0) || new Date().getTime();
    };
  }
})(window);

(function (root, perf) {
  var vendors;

  vendors = ['ms', 'moz', 'webkit', 'o'];

  var lastTime, requestAnimationFrame, x, _i, _len;
  requestAnimationFrame = root.requestAnimationFrame;
  if (!requestAnimationFrame) {
    for (_i = 0, _len = vendors.length; _i < _len; _i++) {
      x = vendors[_i];
      requestAnimationFrame = root["" + x + "RequestAnimationFrame"];
      if (requestAnimationFrame) {
        break;
      }
    }
  }
  if (!requestAnimationFrame) {
    lastTime = 0;
    requestAnimationFrame = function (callback, element) {
      var currTime, id, timeToCall;
      currTime = perf.now();
      timeToCall = Math.max(0, 16 - (currTime - lastTime));
      id = root.setTimeout((function () {
        return callback(currTime + timeToCall);
      }), timeToCall);
      lastTime = currTime + timeToCall;
      return id;
    };
  }

  var cancelAnimationFrame, x, _i, _len;
  cancelAnimationFrame = root.cancelAnimationFrame;
  if (!cancelAnimationFrame) {
    for (_i = 0, _len = vendors.length; _i < _len; _i++) {
      x = vendors[_i];
      cancelAnimationFrame = root["" + x + "CancelAnimationFrame"] || root["" + x + "CancelRequestAnimationFrame"];
      if (cancelAnimationFrame) {
        break;
      }
    }
  }
  if (!cancelAnimationFrame) {
    cancelAnimationFrame = function (id) {
      return root.clearTimeout(id);
    };
  }

})(window, window.performance);
