import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogListAllComponent } from './components/blog-list-all/blog-list-all.component';
import { BlogSingleComponent } from './components/blog-single/blog-single.component';

const routes: Routes = [
  { path: '', component: BlogListAllComponent },
  { path: 'dynamic', component: BlogSingleComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
