import { Component, OnInit } from '@angular/core';
import { RoutesService } from '../services/routes.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  productid:number=null;
  productname: string = ""
  productunits:number = null;
  productdesc:string = ""
  productprice: number = null;
  constructor(private routeService: RoutesService, private router:Router) { }

  ngOnInit() {

  }

  add(){
    var product = {id: this.productid, name: this.productname, description: this.productdesc, price: this.productprice, units:this.productunits}

    this.routeService.addProduct(product).subscribe((data)=>{
      console.log(data)
      if(data === true){
        alert("Added a new product")
      }else{
        alert("Duplicate Item")
      }
    })
  }
}
