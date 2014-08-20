define('eventmap', function() {
  var EventMap = function() {
    this.events = {};
  };

  EventMap.prototype.on = function(name, callback) {
    this.events[name] = this.events[name] || [];
    this.events[name].push(callback);
  };

  EventMap.prototype.off = function(name) {
    delete this.events[name];
  };

  EventMap.prototype.trigger = function() {
    var name = arguments[0];
    var args = [].slice.call(arguments, 1);

    this.events[name].apply({}, args);
  };
});