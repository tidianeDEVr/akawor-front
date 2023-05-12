import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandListAllComponent } from './command-list-all.component';

describe('CommandListAllComponent', () => {
  let component: CommandListAllComponent;
  let fixture: ComponentFixture<CommandListAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommandListAllComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommandListAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
