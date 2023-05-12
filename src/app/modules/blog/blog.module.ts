import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogSingleComponent } from './components/blog-single/blog-single.component';
import { BlogListAllComponent } from './components/blog-list-all/blog-list-all.component';
import { CoreModule } from 'src/app/core/core.module';


@NgModule({
  declarations: [
    BlogSingleComponent,
    BlogListAllComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    CoreModule
  ]
})
export class BlogModule { }
