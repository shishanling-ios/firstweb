import {Component, OnInit,Input,Output, ViewChild} from '@angular/core';
import {NzCarouselComponent} from "ng-zorro-antd/carousel";
import {FromToInterface} from "ng-zorro-antd/carousel/typings";

@Component({
  selector: 'app-news-main-right-carousel',
  templateUrl: './news-main-right-carousel.component.html',
  styleUrls: ['./news-main-right-carousel.component.scss']
})
export class NewsMainRightCarouselComponent implements OnInit{
  @ViewChild("nzCarousel") carousel: NzCarouselComponent|undefined;

  @Input() dataSource:{title: string, src: string}[]=[]
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
