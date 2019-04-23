import {
  Component,
  OnInit,
  ViewChild,
  AfterViewInit,
  OnDestroy,
  ElementRef,
  HostListener
} from "@angular/core";
import { Subscription, fromEvent, Observable } from "rxjs";
import { pairwise, switchMap, takeUntil } from "rxjs/operators";
import { ToolService } from "src/app/components/tools/tool-service.service";

@Component({
  selector: "app-canvas",
  templateUrl: "./canvas.component.html",
  styleUrls: ["./canvas.component.scss"]
})
export class CanvasComponent implements AfterViewInit, OnDestroy {
  @ViewChild("canvas") canvas: ElementRef;

  cx: CanvasRenderingContext2D;
  drawingSubscription: Subscription;
  canvasEl: HTMLCanvasElement;

  constructor(private toolService: ToolService) {}

  @HostListener("window:resize", ["$event"])
  onResize(event) {
    this.canvasEl.width = window.innerWidth;
    this.canvasEl.height = window.innerHeight;
  }

  ngAfterViewInit() {
    // get the context
    this.canvasEl = this.canvas.nativeElement;
    this.cx = this.canvasEl.getContext("2d");
    // set the width and height

    this.canvasEl.width = window.innerWidth;
    this.canvasEl.height = window.innerHeight;

    // set some default properties about the line
    this.cx.lineWidth = this.toolService.getBrushSize();
    this.cx.lineCap = "round";
    this.cx.strokeStyle =  this.toolService.getColor();

    // we'll implement this method to start capturing mouse events
    this.captureEvents(this.canvasEl);
  }

  captureEvents(canvasEl: HTMLCanvasElement) {
    // this will capture all mousedown events from the canvas element
    this.drawingSubscription = fromEvent(canvasEl, "mousedown")
      .pipe(
        switchMap(e => {
          this.cx.lineWidth = this.toolService.getBrushSize();
          this.cx.strokeStyle = this.toolService.getColor();

          // after a mouse down, we'll record all mouse moves
          return fromEvent(canvasEl, "mousemove").pipe(
            // we'll stop (and unsubscribe) once the user releases the mouse
            // this will trigger a 'mouseup' event
            takeUntil(fromEvent(canvasEl, "mouseup")),
            // we'll also stop (and unsubscribe) once the mouse leaves the canvas (mouseleave event)
            takeUntil(fromEvent(canvasEl, "mouseleave")),
            // pairwise lets us get the previous value to draw a line from
            // the previous point to the current point

            pairwise()
          );
        })
      )
      .subscribe((res: [MouseEvent, MouseEvent]) => {
        const rect = canvasEl.getBoundingClientRect();

        // previous and current position with the offset
        const prevPos = {
          x: res[0].clientX - rect.left,
          y: res[0].clientY - rect.top
        };

        const currentPos = {
          x: res[1].clientX - rect.left,
          y: res[1].clientY - rect.top
        };

        // this method we'll implement soon to do the actual drawing
        this.drawOnCanvas(prevPos, currentPos);
      });
  }

  drawOnCanvas(
    prevPos: { x: number; y: number },
    currentPos: { x: number; y: number }
  ) {
    // incase the context is not set
    if (!this.cx) {
      return;
    }

    // start our drawing path
    this.cx.beginPath();

    // we're drawing lines so we need a previous position
    if (prevPos) {
      // sets the start point
      this.cx.moveTo(prevPos.x, prevPos.y); // from
      // draws a line from the start pos until the current position
      this.cx.lineTo(currentPos.x, currentPos.y);

      // strokes the current path with the styles we set earlier
      this.cx.stroke();
    }
  }

  ngOnDestroy() {
    // this will remove event lister when this component is destroyed
    this.drawingSubscription.unsubscribe();
  }
}
