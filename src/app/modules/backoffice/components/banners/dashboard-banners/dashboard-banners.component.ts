import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { BannerService } from 'src/app/core/services/banner.service';
import { BANNER } from 'src/app/data/interfaces';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-dashboard-banners',
  templateUrl: './dashboard-banners.component.html',
  styleUrls: ['./dashboard-banners.component.scss']
})
export class DashboardBannersComponent {
  public countOnline: number = 0;
  public countSmallAside: number = 0;
  public countTopBeforeHeader: number = 0;
  public countHeroSection: number = 0;
  public selectedBannerType: string = '';
  public isCreating: boolean = false;
  public topBanners: BANNER[] = [];
  public asideBanners: BANNER[] = [];
  public imageBannerPath = `${environment.BACKEND_IMAGES_FOLDER}/banners/`
  public heroBanners: BANNER[] = [];
  public selectedFilename: string = '';
  public selectedFile: any;
  public bannerTypeControl = new FormControl('', [Validators.required]);
  public bannerRedirectToControl = new FormControl('');
  public bannerTitleControl = new FormControl('');
  public bannerSubTitleControl = new FormControl('');
  constructor(private bannerService: BannerService) {
    this.bannerService.getTopBanners()
    .then((res)=>{
      this.topBanners = res;
    })
    this.bannerService.getHeroBanners()
    .then((res)=>{
      this.heroBanners = res;
    })
  }

  onFileChange(evt:any): void {
    this.selectedFilename = evt.target.files[0].name;
    this.selectedFile = evt.target.files[0];
  }
  
  createBanner() {
    this.isCreating = true;
    var bannerToAdd: BANNER = {
      bannerType: this.selectedBannerType,
    };
    if(this.selectedBannerType === 'hero-banner') {
      if(this.bannerTitleControl.value && this.bannerTitleControl.value!=='')
        bannerToAdd.bannerTitle = this.bannerTitleControl.value;
      if(this.bannerSubTitleControl.value && this.bannerSubTitleControl.value!=='')
        bannerToAdd.bannerSubTitle = this.bannerSubTitleControl.value;
    }
    const API_ENDPOINT = `${environment.BACKEND_API_URL}/image/upload`;
    const request = new XMLHttpRequest();
    const formData = new FormData();
    request.open("POST", API_ENDPOINT, true);
    request.onreadystatechange = () => {
      if (request.readyState === 4 && request.status === 200) {
        bannerToAdd.bannerFilename = request.responseText;
        this.bannerService.createBanner(bannerToAdd)
        .then((res)=>{
          if (res.bannerType==='top-site-banner') this.topBanners.push(res);
          if (res.bannerType==='hero-banner') this.heroBanners.push(res);
          if (res.bannerType==='aside-banner') this.asideBanners.push(res);
          this.isCreating = false;
        })
      }
    };
    formData.append("folder", 'banners');
    formData.append("images", this.selectedFile);
    request.send(formData);
  }
}
