import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToolService {

  brushSize:number =3;
  brushColor:string = '666666';

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
}
