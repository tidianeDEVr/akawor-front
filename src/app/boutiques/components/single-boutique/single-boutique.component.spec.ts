import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleBoutiqueComponent } from './single-boutique.component';

describe('SingleBoutiqueComponent', () => {
  let component: SingleBoutiqueComponent;
  let fixture: ComponentFixture<SingleBoutiqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleBoutiqueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleBoutiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
