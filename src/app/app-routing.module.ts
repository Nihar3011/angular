import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guard/auth.guard'
const routes: Routes = [
  {
    path: '', redirectTo:'login',pathMatch: 'full'
  },
  {
    path: 'login', loadChildren: './signup/signup.module#SignupModule'
  },
  {
    path: 'dashboard', loadChildren: './base/base.module#BaseModule', 
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
