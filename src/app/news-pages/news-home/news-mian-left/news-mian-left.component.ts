import {Component, Input, OnInit, Output} from '@angular/core';
import {homeLeftNewsMockData, NewsLeftData} from '../news-home-service/news-home-mock-data';
import {NzListItemComponent} from "ng-zorro-antd/list/list-item.component";
import {inputNames} from "@angular/cdk/schematics";

import {NewsPagesService} from "../../../service/news-pages.service";
import {leftNewsIsFloat} from "../../home-share-data";
import { Time } from '@angular/common';
import {NewsHomeService} from "../news-home-service/news-home.service";

@Component({
  selector: 'app-news-mian-left',
  templateUrl: './news-mian-left.component.html',
  styleUrls: ['./news-mian-left.component.scss'],

})
export class NewsMianLeftComponent implements OnInit{
  //这个页面有好几种模式//
  dataSource: NewsLeftData[] = homeLeftNewsMockData;
  tempArray:string[] = ['1', '2', '3', '4', '5', '6'];
  tempClass = "123";
  @Output() headerIsFloat:boolean = false;

  constructor(private service:NewsHomeService) {

  }

  ngOnInit() {
    console.log("NewsMianLeftComponent--service", this.service);
    //实现方案
    /*
    停留1秒后,更换class.新的class添加一个进场动画,
    对新的class添加监听,onmouseleave触发后更换旧calss.搞定.
    困难点在于动画和添加监听
    动画:宽高动画
    监听:需要只监听onmouseleave hover后的div.
    */
    /*
    新任务,做一个有圆角且拼接的图形,比如十字架

    */

    let liList_temp = document.querySelector('.nz_list')?.querySelectorAll('div.details');
    // onmouseleave()
    if (!liList_temp) {
      return;
    }
    let liList: NodeListOf<Element> = liList_temp;

    var timer: any = undefined;
    for (var index = 0; index < liList.length; index++) {
      (liList[index] as HTMLElement).onmouseenter = (function (selectIndex) {
        return function () {
          //增加延迟事件
          timer = setTimeout(function () {
            for (let i = 0; i < liList.length; i++) {
              liList[i].removeAttribute('class',);
            }
            liList[selectIndex].setAttribute('class', 'select_li');
          }, 600);
        };
      }(index));
      //添加鼠标移出事件，保证离开的时候清除延迟器，不影响下一次操作
      (liList[index] as HTMLElement).onmouseleave = (function (selectIndex) {
        liList[index].setAttribute('class', 'select_li');
        clearTimeout(timer);
      });
    }
  }
  time:NodeJS.Timeout|undefined = undefined;
  //
  hoverTitle(details_div: HTMLDivElement){
    //更改当前div的class
    console.log("headerIsFloat==", this.headerIsFloat);
    this.time = setTimeout(function () {
      console.log("this.timethis.timethis.timethis.time");
      details_div.setAttribute('class', 'details details_hover');
    },600)
  }
  leaveTitle(){
    console.log("leaveTitle");
    clearTimeout(this.time);
  }

  leaveLiItem(details_div: HTMLDivElement){
    details_div.setAttribute('class', 'details');
    console.log("headerIsFloat==", this.headerIsFloat);
  }

}



