import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopCardLoaderComponent } from './shop-card-loader.component';

describe('ShopCardLoaderComponent', () => {
  let component: ShopCardLoaderComponent;
  let fixture: ComponentFixture<ShopCardLoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopCardLoaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopCardLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
