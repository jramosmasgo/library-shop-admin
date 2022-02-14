import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styles: [
  ]
})
export class AdminComponent implements OnInit {

  constructor() { }

  flag: boolean = false;
  @ViewChild('sidenav') sidenav?: MatSidenav;
  @HostListener('window:resize', ['$event'])

  onResize(event: any) {
    if (event.target.innerWidth < 850) {
      this.sidenav?.close();
      this.flag = true;
    } else {
      this.sidenav?.open();
      this.flag = false;
    }
  }

  ngOnInit(): void {
  }

}
