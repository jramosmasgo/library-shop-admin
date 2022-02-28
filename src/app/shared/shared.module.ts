import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesignModule } from './design/design.module';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { AdminLayoutComponent } from './layout/admin/adminLayout.component';
import { AuthLayoutComponent } from './layout/auth/authLayout.component';
import { ContentComponent } from './components/content/content.component';

@NgModule({
  declarations: [
    ToolbarComponent,
    SidenavComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    ContentComponent,
  ],
  imports: [CommonModule, DesignModule],
  exports: [AdminLayoutComponent, AuthLayoutComponent, ContentComponent],
})
export class SharedModule {}
