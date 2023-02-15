import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from "./home/home.component";
import {SslIdentyComponent} from "./ssl-identy/ssl-identy.component";
import {SslDialogBoardComponent} from "./ssl-dialog-board/ssl-dialog-board.component";
import {SslDataComponent} from "./ssl-data/ssl-data.component";
import {SslAppsComponent} from "./ssl-apps/ssl-apps.component";
import {SslDialogExportComponent} from "./ssl-dialog-export/ssl-dialog-export.component";
import {SslDialogManageComponent} from "./ssl-dialog-manage/ssl-dialog-manage.component";
import {MatTableModule} from "@angular/material/table";
import {MatPaginator, MatPaginatorModule} from "@angular/material/paginator";
import {MatSortModule} from "@angular/material/sort";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {MatLegacyChipsModule} from "@angular/material/legacy-chips";
import {PerfectScrollbarModule} from "ngx-perfect-scrollbar";
import {RouterOutlet} from "@angular/router";
import {DialogAiEstimateComponent} from "./ssl-dialog-manage/dialog-ai-estimate/dialog-ai-estimate.component";
import {MsgDetailsShowComponent} from "./ssl-dialog-manage/msg-details-show/msg-details-show.component";
import {MatIconModule} from "@angular/material/icon";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatRadioModule} from "@angular/material/radio";
import {NzImageModule} from "ng-zorro-antd/experimental/image";
import {NzTabComponent, NzTabsModule} from "ng-zorro-antd/tabs";
import {NzTableModule} from "ng-zorro-antd/table";
import { TestTableComponent } from './test-table/test-table.component';
import { NewsMianTabbarComponent } from '../news-pages/news-mian-tabbar/news-mian-tabbar.component';

@NgModule({
    declarations: [
        HomeComponent,
        SslIdentyComponent,
        SslAppsComponent,
        SslDataComponent,
        SslDialogBoardComponent,
        SslDialogManageComponent,
        SslDialogExportComponent,
        DialogAiEstimateComponent,
        MsgDetailsShowComponent,
        TestTableComponent,
        NewsMianTabbarComponent,

    ],
    imports: [
        CommonModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatSidenavModule,
        MatListModule,
        MatLegacyChipsModule,
        PerfectScrollbarModule,
        RouterOutlet,
        MatIconModule,
        MatCheckboxModule,
        MatRadioModule,
        NzImageModule,
        NzTabsModule,
    ]
})
export class PagesModule {
}
