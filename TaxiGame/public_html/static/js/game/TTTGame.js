var TTTGame = (function(){

// angle of our sprites movement
  var ANGLE = 26.55;
  var TILE_WIDTH = 68;
  var SPEED = 5;
  var TAXI_START_X = 30;
  var JUMP_HEIGHT = 15;

  function TTTGame(phaserGame){
    this.game = phaserGame;
    // array we we put our road sprites
    this.arrTiles = [];
    // this means that as a default user didn't click to mouse
    this.mouseTouchDown = false;

    this.jumpSpeed = JUMP_HEIGHT;
   // as default taxi doesn't jump
    this.isJumping = false;
    this.currentJumpHeight = 0;


    this.taxi = undefined;
    this.taxi_X = TAXI_START_X;
    // how many iterations do we need
    this.numberOfIterations = 0;
    this.roadStartPosition = {
      x: GAME_WIDTH +100,
      y: GAME_HEIGHT / 2 - 100
    }
  }



TTTGame.prototype.taxiJump = function(){
  this.currentJumpHeight -=this.jumpSpeed;
  this.jumpSpeed -= 0.5;
  if(this.jumpSpeed < - JUMP_HEIGHT){
    this.isJumping = false;
    this.jumpSpeed = JUMP_HEIGHT;
  }
};

TTTGame.prototype.calculatePositionOnRoadWithXPosition = function(xpos){

     var adjacent = this.roadStartPosition.x - xpos;
     var alpha = ANGLE * Math.PI / 180;
     var hypotenuse = adjacent / Math.cos(alpha);
     var opposite = Math.sin(alpha) * hypotenuse;
     return {
       x: xpos,
       y: opposite + this.roadStartPosition.y - 57
     }
};

TTTGame.prototype.generateRoad = function(){
  //create first sprite from preloading
    // var sprite = this.game.add.sprite(0, 0, 'tile_road_1');
  //set position of object
  //  add sprite in the first index of array
   var sprite = new Phaser.Sprite(this.game, 0, 0, 'tile_road_1');
   // add world to first index to the beginning
   this.game.world.addChildAt(sprite, 0);
    sprite.anchor.setTo(0.5, 1.0);
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
   this.game.load.image('taxi', 'static/img/assets/taxi.png');

  };

  TTTGame.prototype.create = function(){
       this.generateRoad();
      //  var x = GAME_WIDTH/2;
      //  var y = GAME_HEIGHT/2; or
     var x = this.game.world.centerX;
     var y = this.game.world.centerY;
       this.taxi = new Phaser.Sprite(this.game, x, y,'taxi');
       this.taxi.anchor.setTo(0.5, 1.0);
       this.game.add.existing(this.taxi);
 };


TTTGame.prototype.touchDown = function(){
    this.mouseTouchDown = true;
    if(!this.isJumping){
      this.isJumping = true;
    }
};

TTTGame.prototype.touchUp = function(){
       this.mouseTouchDown = false;
};




  TTTGame.prototype.update = function(){
    // check whether the user has clicked yet to mouse
      if(this.game.input.activePointer.isDown){
        if(!this.mouseTouchDown){
              this.touchDown();
        };
      }else{
        if(this.mouseTouchDown){
              this.touchUp();
        };
      }

      this.numberOfIterations++;
      if(this.numberOfIterations > TILE_WIDTH/ SPEED){
        //reset numberOfIterations
        this.numberOfIterations = 0;
        // call generateRoad
        this.generateRoad();
      };

      if(this.isJumping){
        this.taxiJump();
      };

      var pointOnRoad = this.calculatePositionOnRoadWithXPosition(this.taxi_X);
      this.taxi.x = pointOnRoad.x;
      this.taxi.y = pointOnRoad.y + this.currentJumpHeight;
      this.moveTilesWithSpeed(SPEED);
  };



  return TTTGame;

})();
