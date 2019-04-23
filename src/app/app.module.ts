import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { NavBarComponent } from "./nav-bar/nav-bar";
import { CanvasComponent } from "./components/canvas/canvas.component";
import { FormsModule } from '@angular/forms';
import {NgbModule, NgbPopover, NgbPopoverModule} from '@ng-bootstrap/ng-bootstrap';
import { ToolBarComponent } from './components/tools/tool-bar/tool-bar.component';


@NgModule({
  declarations: [AppComponent, NavBarComponent, CanvasComponent, ToolBarComponent],
  imports: [BrowserModule, FormsModule, NgbModule, NgbPopoverModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
