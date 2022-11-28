import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  @Input() title: string | undefined;
  @Input() image: string | undefined;
  @Input() description: string | undefined;
  @Input() class: string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
