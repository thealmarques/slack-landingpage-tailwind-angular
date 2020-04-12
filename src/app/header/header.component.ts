import { Component, OnInit, HostListener } from "@angular/core";
import { trigger, style, transition, state, animate } from '@angular/animations';

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
  animations: [
    trigger('showSideMenu', [
      state('false', style({
        left: '100%',
        visibility: 'hidden'
      })),
      state('true', style({
        left: '0%',
      })),
      transition('false=>true', animate('1500ms ease-in-out')),
      transition('true=>false', animate('1000ms ease-in-out'))
    ])],
})
export class HeaderComponent implements OnInit {
  sideMenu: boolean;
  width: number;
  activeSubMenu: number;
  constructor() {}

  @HostListener("window:resize", ["$event"])
  onResize(event) {
    this.width = event.target.innerWidth;
  }

  ngOnInit() {
    this.sideMenu = false;
    this.width = window.innerWidth;
    this.activeSubMenu = 0;
  }
}
