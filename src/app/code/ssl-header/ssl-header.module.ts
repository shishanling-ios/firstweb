import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
// 组件
import { SslHeaderComponent } from "./ssl-header.component";


@NgModule({
  imports: [
    RouterModule
  ],
  declarations: [
    SslHeaderComponent,
  ],
  exports: [
    SslHeaderComponent
  ],
  entryComponents: [

  ]
})
export class HeaderModule { }
