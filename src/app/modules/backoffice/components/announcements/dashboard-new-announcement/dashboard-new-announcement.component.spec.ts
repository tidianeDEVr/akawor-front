import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardNewAnnouncementComponent } from './dashboard-new-announcement.component';

describe('DashboardNewAnnouncementComponent', () => {
  let component: DashboardNewAnnouncementComponent;
  let fixture: ComponentFixture<DashboardNewAnnouncementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardNewAnnouncementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardNewAnnouncementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
