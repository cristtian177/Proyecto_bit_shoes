import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutletCompraComponent } from './outlet-compra.component';

describe('OutletCompraComponent', () => {
  let component: OutletCompraComponent;
  let fixture: ComponentFixture<OutletCompraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutletCompraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutletCompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
