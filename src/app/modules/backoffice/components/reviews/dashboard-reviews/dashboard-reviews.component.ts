import { Component } from '@angular/core';
import { ReviewService } from 'src/app/core/services/review.service';
import { DATATABLE_LANGAGE_FR, REVIEW } from 'src/app/data/interfaces';
import { environment } from 'src/environments/environment.development';

declare const DataTable: any;
@Component({
  selector: 'app-dashboard-reviews',
  templateUrl: './dashboard-reviews.component.html',
  styleUrls: ['./dashboard-reviews.component.scss']
})
export class DashboardReviewsComponent {
  public reviews !: REVIEW[];
  public imgPath: string = `${environment.BACKEND_IMAGES_FOLDER}/products/`;
  public selectedReviews: REVIEW[] = [];
  constructor(
    private reviewService: ReviewService
  ){
    this.reviewService.getReviewsDashboard()
    .then((res)=>{
      this.reviews = res;
      setTimeout(() => {
        new DataTable('#allReviews', {
          responsive: true,
          language: DATATABLE_LANGAGE_FR,
        });
      }, 1);
    })
  }
}
