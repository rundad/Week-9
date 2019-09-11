import { Component, OnInit } from '@angular/core';
import { RoutesService } from '../services/routes.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  paramID;
  productid: string = ""
  productname:string = ""
  productunits:number = 0
  productdesc:string = ""
  productprice:number = 0
  productobjid:string = ""
  constructor(private route:ActivatedRoute, private router:Router, private routeService: RoutesService) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params)=>{
      this.paramID = params.get('id');

    })
    this.routeService.getProduct(this.paramID).subscribe((data)=>{
      this.productid = data[0].id;
      this.productname = data[0].name;
      this.productdesc = data[0].description
      this.productprice = data[0].price
      this.productunits = data[0].units;
      this.productobjid = data[0]._id;
    })
  }

  update(){
    var product = {id: this.productid, name: this.productname, description: this.productdesc, price: this.productprice, units:this.productunits, objid:this.productobjid};
    this.routeService.updateProduct(product).subscribe((data)=>{
      this.router.navigateByUrl("/list");

    })
  }

}
