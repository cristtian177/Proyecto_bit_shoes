import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselWithControlsComponent } from './carousel-with-controls.component';

describe('CarouselWithControlsComponent', () => {
  let component: CarouselWithControlsComponent;
  let fixture: ComponentFixture<CarouselWithControlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselWithControlsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarouselWithControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
