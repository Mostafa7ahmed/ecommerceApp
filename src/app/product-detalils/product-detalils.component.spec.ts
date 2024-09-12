import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetalilsComponent } from './product-detalils.component';

describe('ProductDetalilsComponent', () => {
  let component: ProductDetalilsComponent;
  let fixture: ComponentFixture<ProductDetalilsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductDetalilsComponent]
    });
    fixture = TestBed.createComponent(ProductDetalilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
