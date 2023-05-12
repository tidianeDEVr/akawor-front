import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageAsideComponent } from './manage-aside.component';

describe('ManageAsideComponent', () => {
  let component: ManageAsideComponent;
  let fixture: ComponentFixture<ManageAsideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageAsideComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageAsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
