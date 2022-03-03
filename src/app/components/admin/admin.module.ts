import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksComponent } from './books/books.component';
import { AuthorsComponent } from './authors/authors.component';
import { InitComponent } from './init/init.component';
import { AdminRotingModule } from './admin.routes';
import { DesignModule } from 'src/app/shared/design/design.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { CategoriesComponent } from './categories/categories.component';
import { CategoryService } from 'src/app/core/services/category.service';

@NgModule({
  declarations: [
    BooksComponent,
    AuthorsComponent,
    InitComponent,
    CategoriesComponent,
  ],
  imports: [CommonModule, AdminRotingModule, DesignModule, SharedModule],
  providers: [CategoryService],
})
export class AdminModule {}
