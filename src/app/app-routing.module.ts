import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './shared/components/login/login.component';
import { PagenotFoundComponent } from './shared/components/pagenot-found/pagenot-found.component';
import { OrderComponent } from './shared/components/order/order.component';
import { AuthService } from './shared/service/auth.service';

const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'order', component:OrderComponent,canActivate:[AuthService]},
  {path:"pageNotFound", component:PagenotFoundComponent},
  {path:'**', redirectTo:"pageNotFound"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
