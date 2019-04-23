import { Component, OnInit, HostListener, ElementRef } from "@angular/core";
import { ToolService } from "../components/tools/tool-service.service";

@Component({
  selector: "nav-bar",
  templateUrl: "./nav-bar.html",
  styleUrls: ["./nav-bar.scss"]
})
export class NavBarComponent implements OnInit {


  constructor(private eRef: ElementRef, private toolService: ToolService) {}

  ngOnInit() {}

}
