(function (Game) {

  var canvas = document.getElementById('viewport');
  var ctx = canvas.getContext('2d');

  Game.graphics = ctx;
  Game.loop = Loop;
  Game.width = 600;
  Game.height = 600;

  Game.tilemap = new TileMap(8, 8);
  var tileWidth = Game.width / Game.tilemap.width.max;
  var tileHeight = Game.height / Game.tilemap.height.max;

  Game.loop.before('render', function() {
    Game.graphics.clearRect(0, 0, Game.width, Game.height);
  });

  Game.loop.on('render', function() {
    Game.tilemap.each(function (x, y) {
      Game.graphics.fillStyle = 'rgb(255,' + (255 / Game.tilemap.width.max) * x + ',' + (255 / Game.tilemap.height.max) * y + ')';
      Game.graphics.fillRect(x * tileWidth, y * tileHeight, tileWidth, tileHeight);
    });

    var hero = new Image();
    hero.src = 'images/hero_front_test2.png';
    Game.graphics.drawImage(hero, 0, 0);
  });

  Game.loop.on('update', function(dt) {

  });

  Game.loop.run();

})(window.Game = window.Game || {});