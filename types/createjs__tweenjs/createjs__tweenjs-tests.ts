import {DisplayObject} from "@createjs/easeljs";

let target = new DisplayObject();

import { Tween } from "@createjs/tweenjs";
let tween = Tween.get(target)
    .to({ x: 300 }, 400)
    .set({ label: "hello!" })
    .wait(500)
    .to({ alpha: 0, visible: false }, 1000)
    .call((p1, p2) => { /* Tween complete */ }, [ 10, true ]); // p1 === 10, p2 === true, this === target