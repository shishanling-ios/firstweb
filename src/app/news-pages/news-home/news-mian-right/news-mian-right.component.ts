import { Component } from '@angular/core';

import {
  homeRightADList, homeRightHotRankings,
  homeRightNewsCarouselFirst,
  homeRightNewsCarouselSecond, homeRightNewsFeatures, homeRightOtherNews
} from "../news-home-service/news-home-mock-data";

@Component({
  selector: 'app-news-mian-right',
  templateUrl: './news-mian-right.component.html',
  styleUrls: ['./news-mian-right.component.scss']
})
export class NewsMianRightComponent {

  carouselFirstList = homeRightNewsCarouselFirst;
  carouselSecondList = homeRightNewsCarouselSecond;
  ad_List:{title:string}[] = homeRightADList;
  homeRightNewsFeatures:{title:string}[] = homeRightNewsFeatures;
  homeRightHotRankings:{hot:number, title:string}[] = homeRightHotRankings;
  homeRightOtherNews = homeRightOtherNews;

}
