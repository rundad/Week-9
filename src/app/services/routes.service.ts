import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RoutesService {

  constructor(private http:HttpClient) { }

  addProduct(product: any){
    return this.http.post<any>('http://localhost:3000/add',  product );
  }

  listProducts(){
    return this.http.get<any>('http://localhost:3000/list');
  }

  getProduct(productID){
    return this.http.post<any>('http://localhost:3000/getProduct',  {'productid':productID} );
  }

  updateProduct(product:any){

    return this.http.post<any>('http://localhost:3000/update',  product );
  }

  deleteProduct(productID){
    return this.http.post<any>('http://localhost:3000/deleteProduct',  {'productid':productID} );
  }
}
