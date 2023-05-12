import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageDeliveryAddressesComponent } from './manage-delivery-addresses.component';

describe('ManageDeliveryAddressesComponent', () => {
  let component: ManageDeliveryAddressesComponent;
  let fixture: ComponentFixture<ManageDeliveryAddressesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageDeliveryAddressesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageDeliveryAddressesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
