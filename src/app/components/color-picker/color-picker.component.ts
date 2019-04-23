import { Component, OnInit, Input } from '@angular/core';
import { ToolService } from '../tools/tool-service.service';

@Component({
  selector: 'color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.scss']
})
export class ColorPickerComponent implements OnInit {
  selectedColor:string;

  constructor(private toolService:ToolService) { }

  ngOnInit() {
    this.selectedColor = this.toolService.getColor();

    console.log(this.selectedColor);

  }

  onColorChange(event){
    console.log(event);
    this.toolService.setColor(event);
  }

}
