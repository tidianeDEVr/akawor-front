import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandSingleComponent } from './command-single.component';

describe('CommandSingleComponent', () => {
  let component: CommandSingleComponent;
  let fixture: ComponentFixture<CommandSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommandSingleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommandSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
