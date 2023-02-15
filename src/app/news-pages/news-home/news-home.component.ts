import {Component, OnInit, Output, ViewChild} from '@angular/core';
import {NzCarouselComponent} from "ng-zorro-antd/carousel";


@Component({
  selector: 'app-news-home',
  templateUrl: './news-home.component.html',
  styleUrls: ['./news-home.component.scss'],
})
export class NewsHomeComponent implements OnInit{
  //导航条数据
  //二级导航数据
  navBarData = [
    "体育", "NBA", "娱乐", "音乐", "游戏", "财经", "股票",
    "汽车", "科技", "手机", "智能", "时尚", "直播", "文化",
    "旅游", "房产","家居", "教育", "上海", "健康", "艺术"];
  //三级导航数据
  thirdStageNavData = ["首页","国内","国际","数读","军事","航空","传媒科技研究院","政务","公益","媒体","王三三"]
  // 监听页面滑动

  @ViewChild("scrollContainer") scrollContainer: HTMLElement|undefined;

  public asd(): void {
    console.log('scrolling');
  }

  constructor() {

  }
  headerIsFloat:boolean = false;

  ngOnInit() {

    document.getElementById("scrollContainer")?.addEventListener('scroll', this.handleScroll.bind(this));
    window.addEventListener("resize", this.handleWidthChange.bind(this))

    // Observable.fromEvent(window, 'resize')
    //     .debounceTime(100) // 以免频繁处理
    //     .subscribe((event) => {
    //       // 这里处理页面变化时的操作,处理高度和宽度都可以
    //       console.log('come on ..', window.innerWidth);
    //     });
  }

  isLessThan1380 = false;
  left_news_max_top = 0;


  handleObj = {
    handleWidthChange: function() {
      console.log(this.handleWidthChange())
    }
  }

  handleWidthChange(){
    console.log("this.headerIsFloat==", this.headerIsFloat);
    console.log("this.isLessThan1380==", this.isLessThan1380);


    let main_left_news = document.getElementById("main-left-news");
    let main_center_news = document.getElementById("main-center-news");
    if (this.isLessThan1380 && window.innerWidth < 1380){
      //如果已经小于1380了 不做重复处理
    }else if (!this.isLessThan1380 && window.innerWidth >= 1380){
      //如果已经大等于1380了 不做重复处理
    }else if (!this.isLessThan1380 && window.innerWidth < 1380){
      this.isLessThan1380 = true;

      console.log("main_left_news<1380==");

      if (main_left_news && main_center_news){
        console.log('this.headerIsFloat', this.headerIsFloat);
        //如果宽度小于1380 main_left_news 一定是隐藏的
        main_left_news.style.display = 'none';
        if (this.headerIsFloat){
          main_left_news.setAttribute('class', 'main-left-news-float');
          main_center_news.setAttribute('class', 'main-center-news-float');
        }else{
          main_left_news.setAttribute('class', 'main-left-news');
          main_center_news.setAttribute('class', 'main-center-news');
        }
      }

    }else if (window.innerWidth >= 1380){
      this.isLessThan1380 = false;
      console.log("main_left_news>1380==");
      if (main_left_news && main_center_news){
        //如果宽度大于1380  main_left_news 不隐藏
        main_left_news.style.display = 'block';
        if (this.headerIsFloat){
          main_left_news.setAttribute('class', 'main-left-news-float');
          main_center_news.setAttribute('class', 'main-center-news-float');
        }else{
          main_left_news.setAttribute('class', 'main-left-news');
          main_center_news.setAttribute('class', 'main-center-news');
        }
      }

    }



    // if (this.headerIsFloat)
    console.log("window.innerWidth==", window.innerWidth, this.headerIsFloat);
  }



  handleScroll(){

    let element_right = document.getElementById("main-right-news");
    // if (window.innerWidth < 1380){
    //   return;
    // }
    //这里根据滑动该表样式
    let scrollElement = document.getElementById("scrollContainer");

    // console.log("已经滑动啦", document.getElementById("scrollContainer")?.scrollTop);

    let element = document.getElementById("main-left-news");

    // console.log("element?.offsetTop===", element?.offsetTop);
    // console.log("element?.scrollHeight", element?.scrollHeight);
    let main_left_news = document.getElementById("main-left-news");


    let main_center_news = document.getElementById("main-center-news");
    if(scrollElement && element && main_center_news && main_left_news){
      let maxTop = element.offsetTop + element.scrollHeight

      if (this.left_news_max_top == 0){
        this.left_news_max_top = maxTop;
      }
      //
      console.log("maxTop==", maxTop, this.left_news_max_top);
      if (scrollElement.scrollTop >= this.left_news_max_top){
        this.headerIsFloat = true;
        console.log('main-center-news-float');
        //发生了浮动
        main_left_news.setAttribute('class', 'main-left-news-float')
        main_center_news.setAttribute('class', 'main-center-news-float')
        document.getElementById("groundGlass")!.style.display = 'block';
      }else{
        this.headerIsFloat = false;
        main_left_news.setAttribute('class', 'main-left-news')
        console.log('main-center-news');
        main_center_news.setAttribute('class', 'main-center-news')
        document.getElementById("groundGlass")!.style.display = 'none';
      }
    }




  }

  changStyleLeft(){


  }



}
