import { Component, OnInit } from '@angular/core';
import { RoutesService } from '../services/routes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {

  products;
  constructor(private routeService: RoutesService, private router:Router) { }

  ngOnInit() {
    this.routeService.listProducts().subscribe((data)=>{
      this.products = data
    })
  }

  deleteProduct(id){
    if (confirm("Are you sure you want to delete this item")){
      this.routeService.deleteProduct(id).subscribe((data)=>{
        this.products = data;
      });
      
      
    }
  }

}
