var GAME_WIDTH = 640;
var GAME_HEIGHT = 480;

// our state object which includes 4 function
var state = {
  init: init,
  preload: preload,
  update: update,
  create: create
};

var phaserGame = new Phaser.Game (
  GAME_WIDTH,
  GAME_HEIGHT,
  Phaser.AUTO, // switchs between WEBGL and Canvas auto
 'container',
 state
);

var taxiGame = new TTTGame(phaserGame);

function init(){
  // call object taxiGame
      taxiGame.init();
}
function create(){
    taxiGame.create();
}
function preload(){
    taxiGame.preload();
}
function update(){
    taxiGame.update();
}
