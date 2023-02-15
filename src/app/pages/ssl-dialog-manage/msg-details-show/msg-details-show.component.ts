import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-msg-details-show',
  templateUrl: './msg-details-show.component.html',
  styleUrls: ['./msg-details-show.component.scss']
})
export class MsgDetailsShowComponent implements OnInit{
  //1 是消息 2是语音
  @Input() msgType:string = "";
  @Input() msgText:string = "";
  @Output() closeContent = new EventEmitter;

  constructor() {

  }
  ngOnInit() {
  }

  closeContentTr() {
    this.closeContent.emit();
  }

}
