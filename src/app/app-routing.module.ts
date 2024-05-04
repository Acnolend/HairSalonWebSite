import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {AuthenticationComponent} from "./authentication/authentication.component";
import {HaircutsComponent} from './haircuts/haircuts.component';
import { ContactusComponent } from './contactus/contactus.component';
import { OrderComponent } from './order/order.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'authentication', component: AuthenticationComponent },
  { path: 'haircuts', component: HaircutsComponent },
  { path: 'contactus', component: ContactusComponent },
  { path: 'order', component: OrderComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
