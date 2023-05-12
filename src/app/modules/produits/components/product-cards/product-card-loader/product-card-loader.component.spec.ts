import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCardLoaderComponent } from './product-card-loader.component';

describe('ProductCardLoaderComponent', () => {
  let component: ProductCardLoaderComponent;
  let fixture: ComponentFixture<ProductCardLoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductCardLoaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductCardLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
