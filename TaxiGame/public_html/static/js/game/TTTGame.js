var TTTGame = (function(){

// angle of our sprites movement
  var ANGLE = 26.55;
  var TILE_WIDTH = 68;
  var SPEED = 5;
  var TAXI_START_X = 100;
  var JUMP_HEIGHT = 10;

  function TTTGame(phaserGame){
    this.game = phaserGame;


   // what we see when game over
    this.gameOverGraphic = undefined;
    this.counter = undefined;
    this.scoreCount = 0;

    // game vars
    this.isDead = false;
    // should we start render obstacles
     this.hasStarted = false;
    // this means that as a default user didn't click to mouse
    this.mouseTouchDown = false;

    this.taxiTargetX = 0;

    // array we we put our road sprites
    this.arrTiles = [];
    // count every road element that has been rendered
    this.roadCount = 0;
    // point in the future where obstacle should be
    this.nextObstacleIndex = 0;
    this.numberOfIterations = 0;
 /////Taxi jump
    this.jumpSpeed = JUMP_HEIGHT;
   // as default taxi doesn't jump
    this.isJumping = false;
    this.currentJumpHeight = 0;

   //array with obstacles
   this.arrObstacles = [];

   ///////// taxi vars
    this.taxi = undefined;
    this.taxi_X = TAXI_START_X;
    // how many iterations do we need

    this.roadStartPosition = {
      x: GAME_WIDTH +100,
      y: GAME_HEIGHT / 2 - 100
    }
  }


TTTGame.prototype.reset = function(){
  this.scoreCount = 0;
  this.counter.setScore(0, false);
  this.game.tweens.removeFrom(this.taxi);
  this.taxi.rotation = 0;
  this.isDead = false;
  this.hasStarted = false;
  this.jumpSpeed = JUMP_HEIGHT;
  this.isJumping = false;
  this.currentJumpHeight = 0;
  this.arrObstacles = [];
  this.mouseTouchDown = false;
  this.nextObstacleIndex = 0;
  this.taxi_X = TAXI_START_X;
  this.gameOverGraphic.visible = false;
  this.taxiTargetX = 0;
  };




TTTGame.prototype.gameOver = function(){
  // how to add hex color example : hex color red #ff0000 and it doesn't work you should cut # and put 0x instead : 0xff0000
      // car is dead ; we can't start game , clean  array with obstacles
         this.isDead = true;
         this.hasStarted = false;
         this.arrObstacles = [];
         // becuase now we wonna see it
         this.gameOverGraphic.visible = true;

        var dieSpeed = SPEED / 10;
        // create tween for taxi and set for tween props
        var tween_1 = this.game.add.tween(this.taxi);
        tween_1.to({
          x: this.taxi.x + 220,
            y: this.taxi.y - 340
          }, 300 * dieSpeed, Phaser.Easing.Quadratic.Out);

          var tween_2 = this.game.add.tween(this.taxi);
          tween_2.to({
              y: GAME_HEIGHT + 40
            }, 1300 * dieSpeed, Phaser.Easing.Quadratic.In);

            tween_1.chain(tween_2);
            tween_1.start();

           var tween_rotate = this.game.add.tween(this.taxi);
           tween_rotate.to({
             angle: 200
             }, 1300*dieSpeed, Phaser.Easing.Linear.None);
             tween_rotate.start();


};



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


TTTGame.prototype.calculateNextObstacleIndex = function(){
  // low rate
  var minimumOffset = 3;
  // high rate
    var maximumOffset = 10;
    // random number
    var num = Math.random()*(maximumOffset - minimumOffset);
    // place where should be the next obstacle = current sprite road elem + rand number + low rate
    this.nextObstacleIndex = this.roadCount + Math.round(num) + minimumOffset;
};

// function
  TTTGame.prototype.checkObstacles = function () {
    var i = this.arrObstacles.length - 1;
    while(i >= 0){
      var sprite = this.arrObstacles[i];
      if(sprite.x < this.taxi.x - 10){
        // increase score
        this.scoreCount ++;
        // animate increasing
        this.counter.setScore(this.scoreCount, true);
        this.arrObstacles.splice(i,1);
      };
      var dx = sprite.x - this.taxi.x;
      dx = Math.pow(dx,2);
      var dy = (sprite.y - sprite.height / 2) - this.taxi.y;
      dy = Math.pow(dy,2);
      var distance = Math.sqrt(dx + dy);
      if(distance < 25){
        //we have a hit
        if(!this.isDead){
          this.gameOver();
        };  };
      i--;
    }  };



TTTGame.prototype.generateRoad = function(){
//increment count of road elemes which has been rendered each time we call this function
  this.roadCount++;
  var tile = 'tile_road_1';
  //boolean
  isObstacle = false;
 // whether or not should we generate obstacle
 // if firstly we've already had more road's sprites than obstacles, secondly if process of rendering
 // obstacles has been run
if(this.roadCount >this.nextObstacleIndex && this.hasStarted){
  // we change sprite instead of part of the road we assign to var tile - obstacle
  tile = 'obstacle_1';
  isObstacle = true;
  // call method which tell us the moment of the next obstacle
  this.calculateNextObstacleIndex();
};
  //create first sprite from preloading
    // var sprite = this.game.add.sprite(0, 0, 'tile_road_1');
  //set position of object
  //  add sprite in the first index of array
   var sprite = new Phaser.Sprite(this.game, 0, 0, tile);
   // add world to first index to the beginning
   this.game.world.addChildAt(sprite, 0);
    sprite.anchor.setTo(0.5, 1.0);
    sprite.x=this.roadStartPosition.x ;
    sprite.y=this.roadStartPosition.y ;
    // we fill our empty array by sprites which are the same parts of our road
    this.arrTiles.push(sprite);

    if(isObstacle){
      this.arrObstacles.push(sprite);
    };

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
   this.game.load.image('obstacle_1', 'static/img/assets/obstacle_1.png');
   this.game.load.image('gameover', 'static/img/assets/gameover.png');
   this.game.load.atlasJSONArray('numbers',
   'static/img/spritesheets/numbers.png',
   'static/img/spritesheets/numbers.json');
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

       /*reassign new x,y, coords */
        x = this.game.world.centerX;
        y = this.game.world.centerY - 50;
       // load sprite with game over image and set coords x,y,
       this.gameOverGraphic = new Phaser.Sprite(this.game, x, y, 'gameover');
       this.gameOverGraphic.anchor.setTo(0.5, 0.5);
       // we shouldn't see it when game starts
       /*this.gameOverGraphic.visible = false;*/
       this.game.add.existing(this.gameOverGraphic);

       this.counter = new TTTCounter(this.game, 0, 0);
       this.game.add.existing(this.counter);
       this.counter.x = this.game.world.centerX
       this.counter.y = 40;

       this.reset();
 };

TTTGame.prototype.calculateTaxiPosition = function(){
     var multiplier = 0.025;
     // exposition of taxi on the screen
     var num = TAXI_START_X + (this.scoreCount * GAME_WIDTH * multiplier);
     // set limits % of GAME_WIDTH
     if(num > GAME_WIDTH * 0.60)  {
       num = 0.60 * GAME_WIDTH;
     };
     this.taxiTargetX = num;
     if(this.taxi_X < this.taxiTargetX){
       var easing = 15;
       this.taxi_X += (this.taxiTargetX - this.taxi_X) / easing;
     };
};



TTTGame.prototype.touchDown = function(){
    this.mouseTouchDown = true;
    // check whether the process of obstacle rendering has been initialized before
    if(this.isDead){
      this.reset();
      return ;
    }

    if(!this.hasStarted){
      this.hasStarted = true;
    };

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

       // if game over we throw taxi away
       if(!this.isDead){
               if(this.isJumping){
               this.taxiJump();

             this.calculateTaxiPosition();

       };


              var pointOnRoad = this.calculatePositionOnRoadWithXPosition(this.taxi_X);
              this.taxi.x = pointOnRoad.x;
              this.taxi.y = pointOnRoad.y + this.currentJumpHeight;

              this.checkObstacles();
        };
        this.moveTilesWithSpeed(SPEED);

  };

  return TTTGame;

})();
