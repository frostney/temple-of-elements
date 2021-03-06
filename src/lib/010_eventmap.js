(function (root) {
  var EventMap = function () {
    this.events = {};
  };

  ['before', 'after', {name: 'now', method: 'on'}].forEach(function (val) {
    if (typeof val === 'string') {
      val = {
        name: val,
        method: val
      };
    }

    EventMap.prototype[val.method] = function (name, callback) {
      this.events[name] = this.events[name] || {};
      this.events[name][val.name] = this.events[name][val.name] || [];
      this.events[name][val.name].push(callback);
    };
  });

  EventMap.prototype.off = function (name) {
    delete this.events[name];
  };

  EventMap.prototype.trigger = function () {
    var name = arguments[0];
    var args = [].slice.call(arguments, 1);

    ['before', 'now', 'after'].forEach(function (val) {
        if (this.events && this.events[name] && this.events[name][val]) {
          this.events[name][val].forEach(function (cb) {
            cb.apply({}, args);
          });
        }
      }, this);
  };

  Event.prototype.clear = function() {
    this.events = {};
  };

  root.EventMap = EventMap;
})
(window);