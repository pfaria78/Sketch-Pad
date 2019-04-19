import { Component, OnInit, HostListener, ElementRef } from "@angular/core";
import { ToolService } from "./tool-service.service";

@Component({
  selector: "app-tool-box",
  templateUrl: "./tool-box.component.html",
  styleUrls: ["./tool-box.component.scss"]
})
export class ToolBoxComponent implements OnInit {
  showSideMenu: boolean = true;
  selectedBrushSize = this.toolService.getBrushSize();
  selectedColor = this.toolService.getColor();

  colors = [
    "a32136",
    "007935",
    "0065a1",
    "ffd200",
    "592c82",
    "402020",
    "b42573",
    "666666",
    "ffffff",
    "000000"
  ];

  brushes = [1, 2, 3, 4, 7, 9, 12, 18, 22, 36, 48, 56];

  toggleMenu() {
    this.showSideMenu = !this.showSideMenu;
  }

  @HostListener("document:click", ["$event"])
  clickout(event) {
    if (!this.eRef.nativeElement.contains(event.target)) {
      this.showSideMenu = false;
    }
  }

  handleSelectColor(color: string) {
    this.selectedColor = color;
    this.toolService.setColor(color);
  }


  handleSelectBrush(brushSize: number) {
    this.selectedBrushSize = brushSize;
    this.toolService.setBrushSize(brushSize);
  }

  constructor(private eRef: ElementRef, private toolService: ToolService) {}

  ngOnInit() {}

  handleInput(){
    this.toolService.setBrushSize(this.selectedBrushSize);
  }
}
