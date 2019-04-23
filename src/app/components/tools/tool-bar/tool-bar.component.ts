import { Component, OnInit } from '@angular/core';
import { DrawingTool } from '../models/drawing-tool';
import { ToolService } from '../tool-service.service';

@Component({
  selector: 'tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.scss']
})
export class ToolBarComponent implements OnInit {

  selectedTool:DrawingTool;
  selectedColor:string= this.toolService.getColor();

  drawingTools:DrawingTool[] = [
    {name:'Pencil', icon:'pencil', properties:{}},
    {name:'Paint Brush', icon:'paint-brush', properties:{}},
    {name:'Text', icon:'text-width', properties:{}}
  ]

  constructor(private toolService:ToolService) { }

  ngOnInit() {
    this.selectedTool = this.drawingTools[0];
    this.selectedColor = this.toolService.getColor();
  }


  onToolItemClicked(tool:DrawingTool){
    this.selectedTool = tool;
    this.toolService.setSelectedTool(tool);
  }

  onColorChange(e:Event){
    console.log(e);
  }


}
