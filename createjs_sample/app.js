var stage;
var queue;

 function init(){
   stage = new createjs.Stage("myCanvas");
   queue = new createjs.LoadQueue(false);
   queue.installPlugin(createjs.Sound);
   queue.addEventListener("complete", handleComplete);
   queue.loadManifest([{id:"alien",src:"assets/alien.jpg"},{id:"sound", src:"assets/rifle.mp3"}]);
 }

 function handleComplete(event){
   var ball = new createjs.Shape();
   ball.addEventListener("click",handleClick);
   ball.graphics.beginFill("#0004ff").drawCircle(0,0,80);
   ball.x = 80;
   ball.y = 220;

   createjs.Tween.get(ball, {loop:true}).to({x:500}, 5000).to({x:50}, 5000);
   createjs.Ticker.addEventListener("tick", tick);
   stage.addChild(ball);
 }
 function handleClick(event) {
   var bmp = new createjs.Bitmap(queue.getResult("alien"));
   bmp.x = Math.random()*500;
   bmp.y = Math.random()*500;
   stage.addChild(bmp);
   createjs.Sound.play("sound");
   console.log("hit to ball");
 }

 function tick(event){
   stage.update();
 }
