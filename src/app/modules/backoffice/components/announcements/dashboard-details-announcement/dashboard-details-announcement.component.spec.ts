import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardDetailsAnnouncementComponent } from './dashboard-details-announcement.component';

describe('DashboardDetailsAnnouncementComponent', () => {
  let component: DashboardDetailsAnnouncementComponent;
  let fixture: ComponentFixture<DashboardDetailsAnnouncementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardDetailsAnnouncementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardDetailsAnnouncementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
