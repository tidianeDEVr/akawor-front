import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveriesListAllComponent } from './deliveries-list-all.component';

describe('DeliveriesListAllComponent', () => {
  let component: DeliveriesListAllComponent;
  let fixture: ComponentFixture<DeliveriesListAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeliveriesListAllComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeliveriesListAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
