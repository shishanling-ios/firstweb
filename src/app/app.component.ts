import { Component, ViewChild } from '@angular/core';
import {MatSidenav} from "@angular/material/sidenav";
import {GetDataService} from "./service/get-data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isMobile = true;
  title = 'AEPractice';
  @ViewChild("sidenav") sidenav?: MatSidenav;
  constructor(private service:GetDataService) {
    console.log("service----", service);
  }


}
