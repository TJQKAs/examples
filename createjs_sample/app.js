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
   ball.graphics.beginFill("#0004ff").drawCircle(0,0,20);
   ball.x = 80;
   ball.y = 220;
   createjs.Tween.get(ball, {loop:true}).to({x:500}, 5000).to({x:50}, 5000);
   createjs.Ticker.addEventListener("tick", tick);
   stage.addChild(ball);
 }
 function handleClick(event) {
   var ball = new createjs.Shape();
   ball.graphics.beginFill("#0004ff").drawCircle(0,0,Math.random()*100);
   createjs.Tween.get(ball, {loop:true}).to({x:Math.random()*1000,y:Math.random()*1000},750).to({x:Math.random()*1000,y:Math.random()*1000},750);
   ball.x = Math.random()*1000;
   ball.y = Math.random()*1000;
   stage.addChild(ball);

   var bmp = new createjs.Bitmap(queue.getResult("alien"));
   bmp.x = Math.random()*1000;
   bmp.y = Math.random()*1000;
   stage.addChild(bmp);
   createjs.Sound.play("sound");
   console.log("hit to ball");
 }

 function tick(event){
   stage.update();
 }
