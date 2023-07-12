import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardMessagingComponent } from './dashboard-messaging.component';

describe('DashboardMessagingComponent', () => {
  let component: DashboardMessagingComponent;
  let fixture: ComponentFixture<DashboardMessagingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardMessagingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardMessagingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
