import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-carousel-with-controls',
  templateUrl: './carousel-with-controls.component.html',
  styleUrls: ['./carousel-with-controls.component.css']
})
export class CarouselWithControlsComponent implements OnInit {

  @Input() title: string | undefined;
  @Input() image: string | undefined;
  @Input() description: string | undefined;
  @Input() class: string | undefined;
  @Input() _id: string | undefined;
  
  constructor( public productService: ProductService) { }

  ngOnInit(): void {
  }

}
