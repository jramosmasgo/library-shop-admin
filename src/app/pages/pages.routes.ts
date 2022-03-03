import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdminGuard } from "../core/guards/admin.guard";
import { AuthGuard } from "../core/guards/auth.guard";
import { AdminComponent } from "./admin/admin.component";
import { AuthComponent } from "./auth/auth.component";

const routes: Routes = [
  {
    path: "auth",
    loadChildren: () =>
      import("../components/auth/auth.module").then((m) => m.AuthModule),
    component: AuthComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "admin",
    loadChildren: () =>
      import("../components/admin/admin.module").then((m) => m.AdminModule),
    component: AdminComponent,
    canActivate: [AdminGuard]
  },
  {
    path: "**",
    redirectTo: "/auth"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {}
