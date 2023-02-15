import {Component, EventEmitter, OnInit, Output} from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-ssl-header',
  templateUrl: './ssl-header.component.html',
  styleUrls: ['./ssl-header.component.scss']
})
export class SslHeaderComponent implements OnInit{
  @Output() toggleEvent = new EventEmitter;
  constructor(private router: Router) { }
  ngOnInit() {
    // this.toggleEvent.emit();
  }

  // 侧边栏
  openSidebar() {
    // alert(this.toggleEvent);
    console.log("toggleEvent==", this.toggleEvent);
    this.toggleEvent.emit();
  }
}

