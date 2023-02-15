import { Component } from '@angular/core';
import {homeLeftNewsMockData, NewsLeftData} from "../news-home-service/news-home-mock-data";


@Component({
  selector: 'app-position-test',
  templateUrl: './position-test.component.html',
  styleUrls: ['./position-test.component.scss']
})
export class PositionTestComponent {
  //这个页面有好几种模式//
  dataSource: NewsLeftData[] = homeLeftNewsMockData;
  tempArray: string[] = ['1', '2', '3', '4', '5', '6'];
  tempClass = "123";
  headerIsFloat = true;
}
