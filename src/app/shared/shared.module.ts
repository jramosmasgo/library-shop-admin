import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesignModule } from './design/design.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { AdminComponent } from './layout/admin/admin.component';
import { LoginComponent } from './layout/login/login.component';
import { ContentComponent } from './components/content/content.component';


@NgModule({
  declarations: [
    ToolbarComponent,
    SidenavComponent,
    AdminComponent,
    LoginComponent,
    ContentComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    DesignModule
  ],
  exports: [
    AdminComponent
  ]
})
export class SharedModule { }
