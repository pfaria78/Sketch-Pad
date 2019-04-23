import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { NavBarComponent } from "./nav-bar/nav-bar";
import { CanvasComponent } from "./components/canvas/canvas.component";
import { FormsModule } from '@angular/forms';
import { ToolBarComponent } from './components/tools/tool-bar/tool-bar.component';
import { ColorPickerComponent } from './components/color-picker/color-picker.component';
import { ColorPickerModule } from 'ngx-color-picker';



@NgModule({
  declarations: [AppComponent, NavBarComponent, CanvasComponent, ToolBarComponent, ColorPickerComponent],
  imports: [BrowserModule, FormsModule, ColorPickerModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
