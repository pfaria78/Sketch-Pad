import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { ToolBoxComponent } from "./tool-box/tool-box.component";
import { CanvasComponent } from "./components/canvas/canvas.component";
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, ToolBoxComponent, CanvasComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
