import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthComponent } from './auth/auth.component';
import { AdminComponent } from './admin/admin.component';
import { SharedModule } from '../shared/shared.module';
import { PagesRoutingModule } from './pages.routes';

@NgModule({
  declarations: [AuthComponent, AdminComponent],
  imports: [CommonModule, SharedModule, PagesRoutingModule],
})
export class PagesModule {}
