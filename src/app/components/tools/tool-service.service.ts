import { Injectable } from '@angular/core';
import { DrawingTool } from './models/drawing-tool';

@Injectable({
  providedIn: 'root'
})
export class ToolService {

  brushSize:number = 14;
  brushColor:string = '#666666';
  selectedTool:DrawingTool;

  constructor() { }

  setBrushSize(val: number){
    this.brushSize = val;
  }

  getBrushSize():number{
    return this.brushSize;
  }


  setColor(val:string){
    this.brushColor = val;
  }

  getColor():string{
    return this.brushColor;
  }


  setSelectedTool(val:DrawingTool){
    this.selectedTool = val;
  }

  getSelectedTool():DrawingTool{
    return this.selectedTool;
  }
}
