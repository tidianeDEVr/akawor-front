import { Component } from '@angular/core';

@Component({
  selector: 'app-blog-list-all',
  templateUrl: './blog-list-all.component.html',
  styleUrls: ['./blog-list-all.component.scss']
})
export class BlogListAllComponent {
  public articles: any[] = ['', '', '', '']
}
