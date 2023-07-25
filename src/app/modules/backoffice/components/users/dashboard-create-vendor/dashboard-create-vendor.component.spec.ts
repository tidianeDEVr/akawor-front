import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardCreateVendorComponent } from './dashboard-create-vendor.component';

describe('DashboardCreateVendorComponent', () => {
  let component: DashboardCreateVendorComponent;
  let fixture: ComponentFixture<DashboardCreateVendorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardCreateVendorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardCreateVendorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
