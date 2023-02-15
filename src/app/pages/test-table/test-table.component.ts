import {animate, state, style, transition, trigger} from '@angular/animations';
import {Component, ViewChild} from '@angular/core';
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {MatTable} from "@angular/material/table";
import {
  MockDataDiaLogAEAI, random,
  WRBaseData,
  WRData
} from "../ssl-dialog-manage/dialog-ai-estimate/dialog-ai-estimate.interface";

@Component({
  selector: 'app-test-table',
  templateUrl: './test-table.component.html',
  styleUrls: ['./test-table.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class TestTableComponent {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<WRData>;

  dataSource: WRData[] = [];
  dataStructure = [
    {key: "内容", value: "Content", width: "auto"},
    {key: "类型", value: "Type", width: "70px"},
    {key: "发送时间", value: "SendTime", width: "180px"},
  ];

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  columnsToDisplay = ['content', 'Type', 'completed_at'];//, 'msgDetails'
  displayDic = {
    content:{key: "内容",value:"content", width: "auto"},
    Type:{key: "类型",value:"Type",  width: "70px"},
    completed_at:{key: "发送时间",value:"completed_at",  width: "220px"},
  }
  columnsToDisplayWithExpand = ['select',...this.columnsToDisplay, 'expand'];

  constructor() {

    let baseData:WRBaseData[] = MockDataDiaLogAEAI;
    let data:WRData[] = <WRData[]>baseData;

    data.forEach(objc => {
      objc.completed = false;
      objc.type = random( 1,2).toString();
      objc.typeStr = objc.type=="1"?"信息":"语音";
    })
    this.dataSource = data
  }
  ordering = '-created_at';
  //选中的id
  selectID:String = "";
  sortData(value: string) {
    if(this.ordering.includes(value)) {
      this.ordering = `-created_at`
    }else {
      this.ordering = `${value},${this.ordering}`
    }

  }

  ngAfterViewInit(): void {

  }

  selectCell(id:string){
    console.log("id=====", id);
    if (this.selectID == id){
      this.selectID = "";
    }else{
      this.selectID = id;
    }
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {


  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    let newDatas = this.dataSource.filter(objc => objc.completed == false )
    return newDatas.length == 0;
  }
  isIndeterminate(){
    let newDatas = this.dataSource.filter(objc => objc.completed == true)
    //这种情况说明选中了但是 没有全部选中
    return newDatas.length != 0 && newDatas.length != this.dataSource.length;
  }

  setAllSelected() {
    let newDatas = this.dataSource.filter(objc => objc.completed == true )
    //如果 没有选中的 或者没有选中全部(也就是说选中的数量小于全部数据)
    if (newDatas.length < this.dataSource.length){
      this.dataSource.forEach(objc => objc.completed = true)
    }else {
      //选中的全部数据,那么取消选中
      this.dataSource.forEach(objc => objc.completed = false)
    }

  }

  clickSub(){
    console.log("dataSource===", this.dataSource);


  }

}
