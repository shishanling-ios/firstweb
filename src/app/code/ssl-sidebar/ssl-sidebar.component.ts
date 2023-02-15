import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Router } from '@angular/router';
import {SidebarAnimation} from "./ssl-sidebar.animation";

// 菜单结构
interface SidebarMenu {
  link: string;
  text: string;
  icon: string;
  jview: boolean;
  children?: any;
  isOpen?: boolean;
  [propName: string]: any;
}
@Component({
  selector: 'app-ssl-sidebar',
  templateUrl: './ssl-sidebar.component.html',
  styleUrls: ['./ssl-sidebar.component.scss'],
  animations:SidebarAnimation,
})
export class SslSidebarComponent implements OnInit {

  routerPath = '';
  // 侧边栏导航菜单
  sidebarMenu: SidebarMenu[];

  JmanageData = true;
  // 用户
  JmanageUser = true;
  // app
  JmanageApp = true;
  // 鉴定
  JidentifyContent = true;
  // 图表
  JviewDashboard = true;
  // 会话留存
  JsmDashboard = true;
  JsmChatView = true;
  JsmDataJob = true;


  constructor(public router: Router,) {
    this.routerPath = window.location.hash;
    this.sidebarMenu = [
      {
        link: 'identy',
        text: 'Identy',
        icon: 'icon-jianchajihua',
        jview: this.JidentifyContent
      },
      {
        link: 'apps',
        text: 'Apps',
        icon: 'icon-APP',
        jview: this.JmanageApp
      },
      {
        link: 'data',
        text: 'Data',
        icon: 'icon-shuju',
        jview: this.JmanageData
      },
      // {
      //   link: 'users',
      //   text: 'Users',
      //   icon: 'icon-yonghuqun',
      //   jview: this.JmanageUser
      // },
      {
        link: 'dialog',
        text: '会话留存',
        icon: 'icon-xiaoxizhongxin',
        jview: this.JsmDashboard||this.JsmChatView||this.JsmDataJob,
        isOpen: (this.routerPath.indexOf('/dialog')!==-1)?true:false,
        children: [
          {
            link: 'dialog/board',
            text: '数据看板',
            jview: this.JsmDashboard
          },
          {
            link: 'dialog/manage',
            text: '会话管理',
            jview: this.JsmChatView
          },
          {
            link: 'dialog/export',
            text: '数据导出',
            jview: this.JsmDataJob
          }
        ]
      },
    ];
  }
  ngOnInit() {
  }
}
