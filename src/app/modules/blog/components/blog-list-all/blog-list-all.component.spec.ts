import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogListAllComponent } from './blog-list-all.component';

describe('BlogListAllComponent', () => {
  let component: BlogListAllComponent;
  let fixture: ComponentFixture<BlogListAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogListAllComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogListAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
