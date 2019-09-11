import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './add/add.component';
import { ListProductsComponent } from './list-products/list-products.component';
import { UpdateProductComponent } from './update-product/update-product.component';

const routes: Routes = [
  {path: "", component:AddComponent},
  {path: "list", component:ListProductsComponent},
  {path: 'update/:id', component:UpdateProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
