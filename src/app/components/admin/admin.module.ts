import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksComponent } from './books/books.component';
import { AuthorsComponent } from './authors/authors.component';
import { InitComponent } from './init/init.component';
import { AdminRotingModule } from './admin.routes';

@NgModule({
  declarations: [BooksComponent, AuthorsComponent, InitComponent],
  imports: [CommonModule, AdminRotingModule],
})
export class AdminModule {}
