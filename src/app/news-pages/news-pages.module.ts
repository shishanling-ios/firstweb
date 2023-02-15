import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NewsHomeComponent} from "./news-home/news-home.component";
import {NewsHeaderComponent} from "./news-header/news-header.component";
import {NzBreadCrumbModule} from "ng-zorro-antd/breadcrumb";
import {PerfectScrollbarModule} from "ngx-perfect-scrollbar";
import {NewsMianLeftComponent} from "./news-home/news-mian-left/news-mian-left.component";
import {NewsMianRightComponent} from "./news-home/news-mian-right/news-mian-right.component";
import {NewsMianCenterComponent} from "./news-home/news-mian-center/news-mian-center.component";
import {CdkFixedSizeVirtualScroll} from "@angular/cdk/scrolling";
import {NzListModule} from "ng-zorro-antd/list";
import {NzSkeletonModule} from "ng-zorro-antd/skeleton";
import {NzDividerModule} from "ng-zorro-antd/divider";
import {
    NewsMainCenterCarouselComponent
} from "./news-home/news-main-center-carousel/news-main-center-carousel.component";
import {NzCarouselModule} from "ng-zorro-antd/carousel";
import {NzTabsModule} from "ng-zorro-antd/tabs";
import {PositionTestComponent} from "./news-home/position-test/position-test.component";
import {FormsModule} from "@angular/forms";
import {NzImageModule} from "ng-zorro-antd/experimental/image";
import {NzDropDownModule} from "ng-zorro-antd/dropdown";
import {QRCodeComponent, QRCodeModule} from "angular2-qrcode";
import {NewsMainRightCarouselComponent} from "./news-home/news-main-right-carousel/news-main-right-carousel.component";



@NgModule({
    declarations: [
        NewsHomeComponent,
        NewsHeaderComponent,
        NewsMianCenterComponent,
        NewsMianLeftComponent,
        NewsMianRightComponent,
        NewsMainCenterCarouselComponent,
        PositionTestComponent,
        NewsMainRightCarouselComponent
    ],
    exports: [
        NewsHomeComponent,
        NewsMianCenterComponent,
        NewsMianLeftComponent,
        PositionTestComponent,
    ],
    imports: [

        CommonModule,
        NzBreadCrumbModule,
        PerfectScrollbarModule,
        CdkFixedSizeVirtualScroll,
        NzListModule,
        NzSkeletonModule,
        NzDividerModule,
        NzCarouselModule,
        NzTabsModule,
        FormsModule,
        NzImageModule,
        NzDropDownModule,
        QRCodeModule,


    ],



})
export class NewsPagesModule { }
