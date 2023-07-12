import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardShopsComponent } from './dashboard-shops.component';

describe('DashboardShopsComponent', () => {
  let component: DashboardShopsComponent;
  let fixture: ComponentFixture<DashboardShopsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardShopsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardShopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
