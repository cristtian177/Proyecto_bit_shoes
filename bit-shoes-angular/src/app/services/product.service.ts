import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product.model'

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  URL_API = "http://localhost:5000/shoes"
  products: any //listar los productos
  currentProduct: Product //crear - actualizar - eliminar el formulario
  shoppingCart: any

  constructor(public http: HttpClient) { 
    this.currentProduct = new Product()
  }

  getProducts(){
    return this.http.get(`${this.URL_API}/get-shoes`)
  }

  createProduct(data: any){
    return this.http.post(`${this.URL_API}/create-shoes`, data)
  }

  deleteProduct(id: string){
    return this.http.delete(`${this.URL_API}/delete-shoes?id=${id}`)
  }

  updateProduct(id: string, data: any){
    return this.http.put(`${this.URL_API}/update-shoes?id=${id}`, data)
  }

}
