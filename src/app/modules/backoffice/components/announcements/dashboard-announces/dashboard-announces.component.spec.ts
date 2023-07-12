import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardAnnouncesComponent } from './dashboard-announces.component';

describe('DashboardAnnouncesComponent', () => {
  let component: DashboardAnnouncesComponent;
  let fixture: ComponentFixture<DashboardAnnouncesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardAnnouncesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardAnnouncesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
