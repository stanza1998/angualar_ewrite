import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { PriceComponent } from './price/price.component';
import { ProductComponent } from './product/product.component';


const routes: Routes = [
{path:'login', component:LoginComponent},
{path:'main', component: MainComponent},
{path:'product', component: ProductComponent},
{path:'price', component:PriceComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
