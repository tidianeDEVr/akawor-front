import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardDetailsUserComponent } from './dashboard-details-user.component';

describe('DashboardDetailsUserComponent', () => {
  let component: DashboardDetailsUserComponent;
  let fixture: ComponentFixture<DashboardDetailsUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardDetailsUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardDetailsUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
