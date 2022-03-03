import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-sidenav",
  templateUrl: "./sidenav.component.html",
  styles: []
})
export class SidenavComponent implements OnInit {
  listMenu: Array<any> = [
    {
      name: "Home",
      url: "",
      icon: "home"
    },
    {
      name: "Ventas",
      url: "",
      icon: "monetization_on"
    },
    {
      name: "Libros",
      url: "book",
      icon: "book"
    },
    {
      name: "Autores",
      url: "",
      icon: "people"
    }
  ];

  constructor() {}

  ngOnInit(): void {}
}
