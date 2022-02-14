import { Component, Input, OnInit } from '@angular/core';
import { MatDrawer, MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styles: [
  ]
})
export class ToolbarComponent implements OnInit {

  @Input() inputSideNav?: MatDrawer;

  constructor() { }

  ngOnInit(): void {
  }

}
