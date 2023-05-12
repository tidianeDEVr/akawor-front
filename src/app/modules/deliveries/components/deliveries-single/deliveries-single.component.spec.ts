import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveriesSingleComponent } from './deliveries-single.component';

describe('DeliveriesSingleComponent', () => {
  let component: DeliveriesSingleComponent;
  let fixture: ComponentFixture<DeliveriesSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeliveriesSingleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeliveriesSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
