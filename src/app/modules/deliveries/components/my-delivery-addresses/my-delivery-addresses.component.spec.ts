import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyDeliveryAddressesComponent } from './my-delivery-addresses.component';

describe('MyDeliveryAddressesComponent', () => {
  let component: MyDeliveryAddressesComponent;
  let fixture: ComponentFixture<MyDeliveryAddressesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyDeliveryAddressesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyDeliveryAddressesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
