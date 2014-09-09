(function (Game) {

  var canvas = document.getElementById('viewport');
  var ctx = canvas.getContext('2d');

  Game.graphics = ctx;

  Game.tilemap = new TileMap(8, 8);
  var tileWidth = 600 / Game.tilemap.width.max;
  var tileHeight = 600 / Game.tilemap.height.max;

  Game.tilemap.each(function (x, y) {
    Game.graphics.fillStyle = 'rgb(255,' + (255 / Game.tilemap.width.max) * x + ',' + (255 / Game.tilemap.height.max) * y + ')';
    Game.graphics.fillRect(x * tileWidth, y * tileHeight, tileWidth, tileHeight);
  });

})(window.Game = window.Game || {});