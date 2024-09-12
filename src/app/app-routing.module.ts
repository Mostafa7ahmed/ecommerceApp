import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { ProductDetalilsComponent } from './product-detalils/product-detalils.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'productPage/:name', component: ProductPageComponent },
  { path: 'productDetalis/:name/:id', component: ProductDetalilsComponent },
  {path:'cart' , component:CartComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
