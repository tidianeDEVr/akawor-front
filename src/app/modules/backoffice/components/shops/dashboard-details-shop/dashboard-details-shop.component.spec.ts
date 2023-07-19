import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardDetailsShopComponent } from './dashboard-details-shop.component';

describe('DashboardDetailsShopComponent', () => {
  let component: DashboardDetailsShopComponent;
  let fixture: ComponentFixture<DashboardDetailsShopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardDetailsShopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardDetailsShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
