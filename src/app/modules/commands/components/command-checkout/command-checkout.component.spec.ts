import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandCheckoutComponent } from './command-checkout.component';

describe('CommandCheckoutComponent', () => {
  let component: CommandCheckoutComponent;
  let fixture: ComponentFixture<CommandCheckoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommandCheckoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommandCheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
