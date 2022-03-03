import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthorsComponent } from "./authors/authors.component";
import { BooksComponent } from "./books/books.component";
import { CategoriesComponent } from "./categories/categories.component";
import { InitComponent } from "./init/init.component";

const routes: Routes = [
  { path: "authors", component: AuthorsComponent },
  { path: "books", component: BooksComponent },
  { path: "home", component: InitComponent },
  { path: "category", component: CategoriesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRotingModule {}
