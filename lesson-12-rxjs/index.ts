import { fromEvent } from "rxjs";
import { map, tap, switchMap, takeUntil } from "rxjs/operators";

let myCanvas = document.getElementById("myCanvas");
let context = myCanvas.getContext("2d");

myCanvas.style.border = "1px solid black";
context.lineWidth = 10;
context.lineCap = "round";

const mouseDown = fromEvent(myCanvas, "mousedown");
const mouseMove = fromEvent(myCanvas, "mousemove");
const mouseUp = fromEvent(myCanvas, "mouseup");

mouseDown
  .pipe(
    tap(console.log),
    switchMap(val =>
      mouseMove.pipe(
        tap(console.log),
        map(val => {
          let x = val.offsetX;
          let y = val.offsetY;
          let dx = val.movementX;
          let dy = val.movementY;
          context.beginPath();
          context.moveTo(x, y);
          context.lineTo(x - dx, y - dy);
          context.stroke();
          context.closePath();
        }),
        takeUntil(mouseUp)
      )
    )
  )
  .subscribe(val => {
    console.log(val);
  });
