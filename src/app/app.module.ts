import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {CodeModule} from "./code/code.module";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NZ_I18N} from 'ng-zorro-antd/i18n';
import {zh_CN} from 'ng-zorro-antd/i18n';
import {registerLocaleData} from '@angular/common';
import zh from '@angular/common/locales/zh';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {SslIdentyComponent} from "./pages/ssl-identy/ssl-identy.component";
import {PagesModule} from "./pages/pages.module";
import {MatIconModule} from "@angular/material/icon";
import {NzTabsModule} from "ng-zorro-antd/tabs";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {PerfectScrollbarModule} from "ngx-perfect-scrollbar";
import {NewsPagesModule} from "./news-pages/news-pages.module";
import {CdkVirtualScrollViewport} from "@angular/cdk/scrolling";

import {NzListModule} from "ng-zorro-antd/list";
import {NzDividerModule} from "ng-zorro-antd/divider";
import {NewsPagesService} from "./service/news-pages.service";




registerLocaleData(zh);

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MatSidenavModule,
        MatListModule,
        CodeModule,
        BrowserAnimationsModule,
        FormsModule,
        HttpClientModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatIconModule,
        NzTabsModule,
        MatCheckboxModule,
        PerfectScrollbarModule,
        NewsPagesModule,
        CdkVirtualScrollViewport,
        NzListModule,
        NzDividerModule
    ],
    providers: [
        {provide: NZ_I18N, useValue: zh_CN},
        NewsPagesService,


    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
