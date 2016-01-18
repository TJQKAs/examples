var stage;
var circle;
var balls = 0;


function init(){
//Create a stage by getting a reference to the canvas
stage = new createjs.Stage("myCanvas");
 //Create a Shape DisplayObject.
while (balls < 10) {
circle = new createjs.Shape();
 circle.graphics.beginFill("green").drawCircle(Math.random()*50, Math.random()*50, 40);
 //Set position of Shape instance.
 circle.x = Math.random()*500;
 circle.y = Math.random()*500;
 //Add Shape instance to stage display list.
 stage.addChild(circle);
 //Update stage will render next frame
 createjs.Ticker.on("tick",tick);
 createjs.Ticker.setFPS(10);

 function tick(event){
 circle.x = circle.x + Math.random()*10 - Math.random()*10;
 circle.y = circle.y + Math.random()*10 - Math.random()*10;
 if (circle.x > stage.canvas.width)
 {circle.x = 0;}
 if (circle.y > stage.canvas.height)
 {circle.y = 0;}
 stage.update(event);
}

balls++;
}
 // circle.addEventListener("click",function(event){alert("fuck man");})
 // circle.on("click",function(event)
 // {
 // });
}
