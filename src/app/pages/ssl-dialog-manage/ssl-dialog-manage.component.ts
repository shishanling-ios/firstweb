import { Component } from '@angular/core';
import {log} from "ng-zorro-antd/core/logger";
import {TestInterfaceService} from "../pages-service/test-interface.service";

enum PageType {
  All,
  AE_AI,
  AE_DEAL,
  WR_AI,
  WR_DEAL,
  OL_AI,
  OL_DEAL
}

@Component({
  selector: 'app-ssl-dialog-manage',
  templateUrl: './ssl-dialog-manage.component.html',
  styleUrls: ['./ssl-dialog-manage.component.scss']
})


export class SslDialogManageComponent {
  currentPageType:PageType;

  tabs = [1, 2, 3];


  constructor(private service:TestInterfaceService) {
   this.currentPageType = PageType.All
    this.getData();
  }

  getData(){
    this.service.getIdenty({}).subscribe((dic: any)=>{
      console.log("getData====", dic);
    })
  }

  changePage(index:PageType){
    log("index", index);
    this.currentPageType = index;
  }

}
