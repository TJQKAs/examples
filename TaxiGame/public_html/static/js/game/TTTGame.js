var TTTGame = (function(){

// angle of our sprites movement
  var ANGLE = 26.55;
  var TILE_WIDTH = 68;
  var SPEED = 5;

  function TTTGame(phaserGame){
    this.game = phaserGame;
    this.arrTiles = [];
    // how many iterations do we need
    this.numberOfIterations = 0;
    this.roadStartPosition = {
      x: GAME_WIDTH +100,
      y: GAME_HEIGHT / 2 - 100
    }
  }

TTTGame.prototype.generateRoad = function(){
  //create first sprite from preloading
    // var sprite = this.game.add.sprite(0, 0, 'tile_road_1');
  //set position of object
  //  add sprite in the first index of array
   var sprite = new Phaser.Sprite(this.game, 0, 0, 'tile_road_1');
   // add world to first index to the beginning
   this.game.world.addChildAt(sprite, 0);
    sprite.anchor.setTo(0.5, 0.5);
    sprite.x=this.roadStartPosition.x ;
    sprite.y=this.roadStartPosition.y ;
    // we fill our empty array by sprites which are the same parts of our road
    this.arrTiles.push(sprite);
  };

 TTTGame.prototype.moveTilesWithSpeed = function(speed){
   // how many sprites arrTiles has minus the last
    var i = this.arrTiles.length - 1;
  //until our arrTiles array has the last one, we sort out each of our sprite,
  // becuase each sprite = this.arrTiles[i]; and after that we substract array elem with index-i, and show the next one
    while(i>=0){
      var sprite = this.arrTiles[i];
      sprite.x -= speed * Math.cos(ANGLE*Math.PI/180);
      sprite.y += speed * Math.sin(ANGLE*Math.PI/180);

     if(sprite.x < -120){
       this.arrTiles.splice(i,1);
       sprite.destroy();
     };
    i--;
  }
  };

  TTTGame.prototype.init = function(){
       this.game.stage.backgroundColor = 'rgb(217, 247, 106)';
       //add plugin bar - shows frame per sec
       this.game.add.plugin(Phaser.Plugin.Debug);
  };

  TTTGame.prototype.preload = function(){
 // responsible for preloading assets
   this.game.load.image('tile_road_1', 'static/img/assets/tile_road_1.png');
  };

  TTTGame.prototype.create = function(){
       this.generateRoad();
 };

  TTTGame.prototype.update = function(){
      this.numberOfIterations++;
      if(this.numberOfIterations > TILE_WIDTH/ SPEED){
        //reset numberOfIterations
        this.numberOfIterations = 0;
        // call generateRoad
        this.generateRoad();

      }
      this.moveTilesWithSpeed(SPEED);
  };



  return TTTGame;

})();
