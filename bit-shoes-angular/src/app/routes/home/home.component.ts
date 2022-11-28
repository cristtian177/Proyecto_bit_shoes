import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  shoes_men_DB = [
    {
      title: 'Botas',
      class: 'img_men_women',
      description:
        'Son un zapato ideal para ir al trabajo. De vestir: son muy parecidas a los zapatos de vestir de hombre tradicionales, pero al tobillo, con cordones finos. Hay muchos modelos que se pueden incluir dentro de esta categoría.',
      image: 'https://batanew.vtexassets.com/arquivos/banner-home-categorias-desk-2.jpg',
    },
    {
      title: 'Mocasines',
      class: 'img_men_women',
      description:
        'La principal característica de los mocasines hombre es no tener cordones ni ningún tipo de sujeción, haciéndolos muy prácticos y fáciles de poner.',
       image: 'https://cf.shopee.com.co/file/dcc8c8547ef4bedaa5ebd8bd4abeb227',
    },
    {
      title: 'Sandalias',
      class: 'img_men_women',
      description:
        '¡Fíjate en las características de cada sandalia antes de combinarlas con tu vestuario! Mejores sandalias para hombre.',
        image: 'https://http2.mlstatic.com/D_NQ_NP_945909-MCO47578230898_092021-W.jpg',
    },
    {
      title: 'Sports',
      class: 'img_men_women',
      description:
        'Encuentra aquí diversos guayos para fútbol de hombre de las mejores marcas deportivas.',
      image: 'https://gamepals.co/1092-large_default/nike-guayos-futbol-magista-hombre-talla-us-85.jpg',
    },
    {
      title: 'Tenis',
      class: 'img_men_women',
      description:
        'Quieres una colección de tenis perfecta? Solo necesitas estos sneakers para hombre que nunca pasan de moda y combinan con todo.',
      image: 'https://http2.mlstatic.com/D_NQ_NP_720728-MCO46568620914_062021-O.jpg',
    },
  ] 

  shoes_women_DB = [
    {
      title: 'Botas',
      class: 'img_men_women',
      description:
        'Aunque existen gran variedad de modelos. Las botas femeninas de vestir logran abrigar el pie y al mismo tiempo dar mayor altura a la mujer y estilizar las piernas.',
      image: 'https://colombia.com.co/wp-content/uploads/2020/06/IMG_20200617_143604_443.jpg',
    },
    {
      title: 'Sandalias',
      class: 'img_men_women',
      description:
        'Cuando se acerca la época primaveral y en concreto la estival, lo que las mujeres andan buscando es poder desprenderse del zapato cerrado.',
      image: 'https://michelugt.com/image/cache/catalog/2020/Dama/2020%20fin%20zapatos/Parte%204/IMG-20201110-WA0298-800x800.jpg',
    },
    {
      title: 'Mocasines',
      class: 'img_men_women',
      description:
        'Los mocasines de mujer llenan de estilo y encanto los pies femeninos, y sus diseños tan despreocupados como llamativos llenan de encanto los looks de la mujer moderna.',
      image: 'https://cf.shopee.com.co/file/9419eaf9335c2d507c78988a92873156',
    },
    {
      title: 'Sports',
      class: 'img_men_women',
      description:
        'Encuentra aquí guayos de fútbol para mujer. Guayos para pasto sintético o terreno firme en todos los colores y tallas.',
      image: 'https://www.zapatillascolombia.com/wp-content/uploads/2019/09/bodegas-de-guayos-.jpg',
    },
    {
      title: 'Tenis',
      class: 'img_men_women',
      description:
        'Tenemos los tenis más cómodos y livianos del mercado, con diseños y colores siempre a la moda, perfectos para mujeres.',
      image: 'https://http2.mlstatic.com/D_NQ_NP_700875-MCO49589417321_042022-W.jpg',
    },
  ]

  constructor() { }

  ngOnInit(): void {

  }

}
