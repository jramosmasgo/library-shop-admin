import { Component, OnInit } from "@angular/core";
import { CategoryService } from "src/app/core/services/category.service";
import { Category } from "src/app/shared/models/category/category.model";

@Component({
  selector: "app-categories",
  templateUrl: "./categories.component.html",
  styles: []
})
export class CategoriesComponent implements OnInit {
  constructor(private categoryService: CategoryService) {}

  categories: Category[] = [
    { name: "terror", id: 1, order: 1 },
    { name: "comedia", id: 1, order: 1 },
    { name: "ciencia ficcion", id: 1, order: 1 }
  ];

  ngOnInit(): void {
    // this.getAllCategories();
  }

  getAllCategories(): void {
    this.categoryService.getAllCategories().subscribe({
      next: (res) => console.log(res),
      error: (err) => console.log(err)
    });
  }
}
