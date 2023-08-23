import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardDetailsCommandComponent } from './dashboard-details-command.component';

describe('DashboardDetailsCommandComponent', () => {
  let component: DashboardDetailsCommandComponent;
  let fixture: ComponentFixture<DashboardDetailsCommandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardDetailsCommandComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardDetailsCommandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
