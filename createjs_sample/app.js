//stage our container for all diplayed objects
var stage;

var queue;

 function init(){
   stage = new createjs.Stage("myCanvas");
//class LoadQueue basic load manager
   queue = new createjs.LoadQueue(false);
   queue.installPlugin(createjs.Sound);
//we listen for a complete
   queue.addEventListener("complete", handleComplete);
//we use loadManifest to preload files, we set them as array  
   queue.loadManifest([{id:"alien",src:"assets/alien.jpg"},{id:"sound", src:"assets/rifle.mp3"}]);
 }

 function handleComplete(event){
   //create a shape
   var ball = new createjs.Shape();
   // when we click we call function handleClick
   ball.addEventListener("click",handleClick);
   //use instance of the graphic class
   ball.graphics.beginFill("#0004ff").drawCircle(0,0,20);
   ball.x = 80;
   ball.y = 220;
  //tween.js to move shape Tween.get(shape, properties of shape)
   createjs.Tween.get(ball, {loop:true}).to({x:1000}, 5000).to({x:50}, 5000);
   //we update the state of our shape by ticker class
   createjs.Ticker.addEventListener("tick", tick);
   //so we create our shape ball and now should put it into our canvas
   stage.addChild(ball);
 }

 //run function handleClick 1) create ball with random direction,
 function handleClick(event) {
   var ball = new createjs.Shape();
   ball.graphics.beginFill("#0004ff").drawCircle(0,0,Math.random()*100);
   createjs.Tween.get(ball, {loop:true}).to({x:Math.random()*1000,y:Math.random()*1000},750).to({x:Math.random()*1000,y:Math.random()*1000},750);
   ball.x = Math.random()*1000;
   ball.y = Math.random()*1000;
   stage.addChild(ball);
//show picture in random place
   var bmp = new createjs.Bitmap(queue.getResult("alien"));
   bmp.x = Math.random()*1000;
   bmp.y = Math.random()*1000;
   stage.addChild(bmp);
//play sound
   createjs.Sound.play("sound");
//print quantity of hitting ball
   console.log("hit to ball");
 }
//update stage
 function tick(event){
   stage.update();
 }
