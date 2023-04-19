import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllBoutiquesComponent } from './all-boutiques.component';

describe('AllBoutiquesComponent', () => {
  let component: AllBoutiquesComponent;
  let fixture: ComponentFixture<AllBoutiquesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllBoutiquesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllBoutiquesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
