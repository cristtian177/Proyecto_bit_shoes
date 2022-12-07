import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Shoes } from '../models/shoes.models';

@Injectable({
  providedIn: 'root'
})

export class ShoesService {

  URL_API = "http://localhost:5000/shoes"
  shoes: any //listar los productos
  currentShoes: Shoes//crear - actualizar - eliminar el formulario
  shoppingCart: any

  constructor(public http: HttpClient) { 
    this.currentShoes = new Shoes()
  }

  getShoes(){
    return this.http.get(`${this.URL_API}/get-shoes`)
  }

  createShoes(data: any){
    return this.http.post(`${this.URL_API}/create-shoes`, data)
  }

  deleteShoes(id: string){
    return this.http.delete(`${this.URL_API}/delete-shoes?id=${id}`)
  }

  updateShoes(id: string, data: any){
    return this.http.put(`${this.URL_API}/update-shoes?id=${id}`, data)
  }

}

