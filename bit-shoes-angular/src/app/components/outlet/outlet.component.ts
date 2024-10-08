import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-outlet',
  templateUrl: './outlet.component.html',
  styleUrls: ['./outlet.component.css']
})
export class OutletComponent implements OnInit {



   outlet_men_casuales_DB = [
    {
      title: 'Casuales',
      class: 'img_men_women_outlet',
      description:'',
      btnText: 'Ver',
      image: 'https://colombia.com.co/wp-content/uploads/2020/05/7477-1627OV-2.jpg',
      btnColor: 'bg-primary-gradient',
    },
    {
      title: 'Casuales',
      class: 'img_men_women_outlet',
            description: '',
      image: 'https://colombia.com.co/wp-content/uploads/2020/05/5482-3301OV-2.jpg',
    },
    {
      title: 'Casuales',
      class: 'img_men_women_outlet',
      description: '',
      image: 'https://colombia.com.co/wp-content/uploads/2020/05/8448A-1291OV-2.jpg',
    },

  ]

  outlet_men_deportivos_DB = [
    {
      title: 'Deportivos',
      class: 'img_men_women_outlet',
      description:'',
      image: 'https://colombia.com.co/wp-content/uploads/2020/05/8215-3301OV-2.jpg',
    },
    {
      title: 'Deportivos',
      class: 'img_men_women_outlet',
            description: '',
      image: 'https://colombia.com.co/wp-content/uploads/2020/05/8215-3301OV-2.jpg',
    },
    {
      title: 'Deportivos',
      class: 'img_men_women_outlet',
      description: '',
      image: 'https://colombia.com.co/wp-content/uploads/2020/05/8215-3301OV-2.jpg',
    },
  ]

  outlet_men_casa_DB = [
    {
      title: 'Para casa',
      class: 'img_men_women_outlet',
      description:'',
      image: 'https://colombia.com.co/wp-content/uploads/2020/08/Sandalia-Crocs-%10Literide-Para-Hombre-Color-Azul-Rey-Marketplace-Colombia-003-600x600.jpg',
    },
    {
      title: 'Para casa',
      class: 'img_men_women_outlet',
            description: '',
      image: 'https://colombia.com.co/wp-content/uploads/2020/08/Sandalia-Crocs-%10Literide-Para-Hombre-Color-Azul-Rey-Marketplace-Colombia-003-600x600.jpg',
    },
    {
      title: 'Para casa',
      class: 'img_men_women_outlet',
      description: '',
      image: 'https://colombia.com.co/wp-content/uploads/2020/08/Sandalia-Crocs-%10Literide-Para-Hombre-Color-Azul-Rey-Marketplace-Colombia-003-600x600.jpg',
    },
  ]

  outlet_women_casuales_DB = [
    {
      title: 'Casuales',
      class: 'img_men_women_outlet',
      description:'',
      image: 'https://michelugt.com/image/cache/catalog/2020/Dama/2020%20fin%20zapatos/Parte%204/IMG-20201110-WA0298-800x800.jpg',
    },
    {
      title: 'Casuales',
      class: 'img_men_women_outlet',
            description: '',
      image: 'https://michelugt.com/image/cache/catalog/2020/Dama/2020%20fin%20zapatos/Parte%204/IMG-20201110-WA0298-800x800.jpg',
    },
    {
      title: 'Casuales',
      class: 'img_men_women_outlet',
      description: '',
      image: 'https://cf.shopee.com.co/file/9419eaf9335c2d507c78988a92873156',
    },

  ]

  outlet_women_deportivos_DB = [
    {
      title: 'Deportivos',
      class: 'img_men_women_outlet',
      description:'',
      image: 'https://colombia.com.co/wp-content/uploads/2022/06/Zapatos-Tenis-Vinotinto-Con-Toques-Negros-Calzado-JY.jpg',
    },
    {
      title: 'Deportivos',
      class: 'img_men_women_outlet',
            description: '',
      image: 'https://colombia.com.co/wp-content/uploads/2020/01/Calzado-Deportivo-Rohi-Sport-Marketplace-Colombia-04.jpeg',
    },
    {
      title: 'Deportivos',
      class: 'img_men_women_outlet',
      description: '',
      image: 'https://colombia.com.co/wp-content/uploads/2022/06/Zapatos-Tenis-Calzado-Casual-Blancos-Con-Toque-Azul-Turquesa-Calzado-JY.jpg',
    },
  ]

  outlet_women_sandalias_DB = [
    {
      title: 'Sandalias',
      class: 'img_men_women_outlet',
      description:'',
      image: 'https://michelugt.com/image/cache/catalog/2020/Dama/2020%20fin%20zapatos/Parte%204/IMG-20201110-WA0298-800x800.jpg',
    },
    {
      title: 'Sandalias',
      class: 'img_men_women_outlet',
            description: '',
      image: 'https://michelugt.com/image/cache/catalog/2020/Dama/2020%20fin%20zapatos/Parte%204/IMG-20201110-WA0298-800x800.jpg',
    },
    {
      title: 'Sandalias',
      class: 'img_men_women_outlet',
      description: '',
      image: 'https://michelugt.com/image/cache/catalog/2020/Dama/2020%20fin%20zapatos/Parte%204/IMG-20201110-WA0298-800x800.jpg',
    },
  ]

  constructor(public productService: ProductService) { }

  ngOnInit(): void {
  }

}
