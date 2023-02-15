import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {CollectionViewer, DataSource} from "@angular/cdk/collections";
import {HttpClient} from "@angular/common/http";
import {NzMessageService} from "ng-zorro-antd/message";
import {NzCarouselComponent} from "ng-zorro-antd/carousel";
import {NewsHomeService} from "../news-home-service/news-home.service";
import {CanterNews} from "../news-home-service/news-home-mock-data";

@Component({
    selector: 'app-news-mian-center',
    templateUrl: './news-mian-center.component.html',
    styleUrls: ['./news-mian-center.component.scss']
})
export class NewsMianCenterComponent implements OnInit, OnDestroy {
    ds: string[] = ["首页", "国内", "国际", "数读", "军事", "航空", "传媒科技研究院", "政务", "公益", "媒体", "王三三", "要闻", "上海", "国内", "国际", "独家", "军事", "财经", "科技", "更多", '体育', '娱乐', '时尚', '汽车', '房产', '航空', '健康', '体育', '娱乐', '时尚', '汽车', '房产', '航空', '健康', '体育', '娱乐', '时尚', '汽车', '房产', '航空', '健康', '体育', '娱乐', '时尚', '汽车', '房产', '航空', '健康',];

    more_list: HTMLElement|null = null;
    //title文字新闻 要模拟网络请求
    textNews: string[] = [
        "党在革命性锻造中更加坚强有力",
        "第二个答案 时刻保持解决大党独有难题的清醒和坚定",
        "奋进新征程！西昌卫星发射中心赢得中国航天\"开门红\"",
        "稳岗留工，留人更要留心",
        "德媒：对德国经济来说，没有中国可不行",
        "社保“缓返补”为企业减负超2700亿元",
        "欧洲明明早和病毒共存了 为何依然惧怕\"放开\"的中国",
        "实施“乙类乙管”首日，全国首批入境旅客顺利通关",
        "全球旅游业市场关注中国重启出境游",
    ]
    //新闻导航

    //网易公开课
    slideshow: string[] = ["叶壮：如何利用游戏化方案，去“管理”孩子", "中国能吃辣的6个省，四川屈居第三？", "科普：狂犬病一旦发作，真的必死无疑吗？", "老人言：进山时带包石灰粉能救命，为什么？"]
    //导航data source
    navbarDataSource: string[] = ["要闻", "上海", "国内", "国际", "独家", "军事", "财经", "科技"];
    //
    navIndex:number|null = 0;
    //点击更多时弹出这个
    moreNavDataSource: string[] = ['体育', '娱乐', '时尚', '汽车', '房产', '航空', '健康'];

    moreIndex:number|null = null;

    curretType = "要闻";

    listDatas:CanterNews[] = [];

    constructor(private service:NewsHomeService) {


    }
    //是否选择了更多
    isSelectedMore():boolean{
        let filterArray = this.moreNavDataSource.filter((str)=> str == this.curretType )
        return filterArray.length != 0;
    }


    getData(){
        this.service.getCenterNewsDatas().subscribe((data:any)=>{
            console.log("NewsMianCenterComponent===", data);
            if (data != null && data.length){
                this.listDatas = data;

            }
        })
    }

    ngOnInit(): void {
        this.getData();
    }

    ngOnDestroy(): void {

    }

    //更多按钮mouseover
    moreShowChannel() {
        // console.log("this.more_list==",this.more_list);
        this.navIndex = 999
        document.getElementById("more")?.setAttribute("class", "more more_hover");
        // console.log("this.more_list==",this.more_list);
        this.more_list = document.getElementById("more_list");

        if (this.more_list) {
            this.more_list.style.display = "block";
        }
    }
    //更多按钮mouseout
    moreHideChannel(){
        console.log("moreHideChannel");
        if (this.navIndex = 999){
            document.getElementById("more")?.setAttribute("class", "more more_current");
        }else{
            document.getElementById("more")?.setAttribute("class", "more");
        }
        this.more_list = document.getElementById("more_list");
        if (this.more_list) {
            this.more_list.style.display = "none";
        }

    }
    //导航itemHover
    navItemHover(index:number){
        console.log("navItemHover -- index", index);
        this.more_list = document.getElementById("more_list");
        if (this.more_list) {
            this.more_list.style.display = "none";
            this.navIndex = index;
            this.curretType = this.navbarDataSource[index];
            document.getElementById("more")?.setAttribute("class", "more");
        }
    }
    //更多列表 item点击  改变他的样式.
    clickMoreItem(index:number){
        console.log("clickMoreItem");
        this.more_list = document.getElementById("more_list");
        if (this.more_list) {
            this.moreIndex = index;
            this.curretType = this.moreNavDataSource[index];
            this.more_list.style.display = "none";
            console.log("this.more_list.style.display==", this.more_list.style.display)
            document.getElementById("more")?.setAttribute("class", "more more_current");
        }



    }

    calcTime(timeStr:string) {

        var str = '';
        if (timeStr) {

            var t1 = new Date(timeStr).getTime();
            var t2 = new Date().getTime();
            var s = (t2 - t1);
            if (s < (86400000 * 7)) {
                var day = Math.floor(s / 86400000);
                var hour = Math.floor((s % 86400000) / 3600000);
                var minute = Math.floor((s % 86400000 % 3600000) / 60000);
                var seconds = Math.floor(s % 86400000 % 3600000 % 60000) / 1000;
                if (day > 0) {
                    str = day + "天前";
                    return str;
                }
                if (hour > 0) {
                    str = hour + "小时前";
                    return str;
                }
                if (minute > 0) {
                    str = minute + "分钟前";
                    return str;
                }
                if (seconds < 60) {
                    str = "刚刚";
                    return str;
                }
                return timeStr.substring(0, 16);

            } else {
                return timeStr.substring(0, 16);
            }
        } else {
            return str;
        }
    }
    //展示或者隐藏分享列表
    shareShow(element:HTMLElement){
        element.style.display = "block";
    }
    shareHide(element:HTMLElement){
        element.style.display = "none";
    }

    weixinShareShow(element:HTMLElement){
        element.style.display = "block";
    }

    weixinShareHide(element:HTMLElement){
        element.style.display = "none";
    }

}
