import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardCommandsComponent } from './dashboard-commands.component';

describe('DashboardCommandsComponent', () => {
  let component: DashboardCommandsComponent;
  let fixture: ComponentFixture<DashboardCommandsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardCommandsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardCommandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
