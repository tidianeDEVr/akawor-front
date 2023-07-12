import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardBannersComponent } from './dashboard-banners.component';

describe('DashboardBannersComponent', () => {
  let component: DashboardBannersComponent;
  let fixture: ComponentFixture<DashboardBannersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardBannersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardBannersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
