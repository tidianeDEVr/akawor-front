import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardDetailsCategorieComponent } from './dashboard-details-categorie.component';

describe('DashboardDetailsCategorieComponent', () => {
  let component: DashboardDetailsCategorieComponent;
  let fixture: ComponentFixture<DashboardDetailsCategorieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardDetailsCategorieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardDetailsCategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
