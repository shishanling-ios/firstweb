import {Component, EventEmitter, OnInit, ViewChild} from '@angular/core';
import {FromToInterface} from "ng-zorro-antd/carousel/typings";
import {MatSidenav} from "@angular/material/sidenav";
import {NzCarouselComponent} from "ng-zorro-antd/carousel";

@Component({
  selector: 'app-news-main-center-carousel',
  templateUrl: './news-main-center-carousel.component.html',
  styleUrls: ['./news-main-center-carousel.component.scss']
})
export class NewsMainCenterCarouselComponent implements OnInit{
  @ViewChild("nzCarousel") carousel: NzCarouselComponent|undefined;
  datas:string[] = ['1', '2', '3', '4', '5'];
  nzAutoPlay = true
  currentIndex = 0;

  constructor() {

  }

  ngOnInit() {

    if (this.carousel){
      this.carousel.nzAutoPlay = true;
    }
  }

  showChange(data:FromToInterface){
    this.currentIndex = data.to;
  }

}
