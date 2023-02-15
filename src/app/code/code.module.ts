import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AppRoutingModule} from "../app-routing.module";
import {SslSidebarComponent} from "./ssl-sidebar/ssl-sidebar.component";
import {MatListModule} from "@angular/material/list";
import {SslHeaderComponent} from "./ssl-header/ssl-header.component";
import {HeaderModule} from "./ssl-header/ssl-header.module";



@NgModule({
  declarations: [SslSidebarComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CommonModule,
    MatListModule,
    AppRoutingModule,
    HeaderModule
  ],
  exports: [
    AppRoutingModule,
    HeaderModule,
    SslSidebarComponent,

  ]
})
export class CodeModule { }
