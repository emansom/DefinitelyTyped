// Draw a square on screen.
import { Stage, Shape } from "@createjs/easeljs";
let stage = new Stage("myCanvas");
let shape = new Shape();
shape.graphics.beginFill("red").drawRect(0, 0, 120, 120);
stage.addChild(shape);
stage.update();

// Sprite Animation Example
import { Sprite, SpriteSheet, Ticker } from "@createjs/easeljs";
let ss = new SpriteSheet({
  frames: {
    width: 32,
    height: 64,
    numFrames: 19
  },
  animations: {run: [0, 25], jump: [26, 63, "run"]},
  images: ["./assets/runningGrant.png"]
});
 
let sprite = new Sprite(ss, "run");
sprite.scaleY = sprite.scaleX = 0.4;
stage.addChild(sprite);
 
sprite.on("click", evt => sprite.gotoAndPlay("jump"));
 
Ticker.on("tick", evt => stage.update());