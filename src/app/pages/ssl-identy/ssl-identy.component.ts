import {AfterViewInit, Component, OnInit, Output, ViewChild} from '@angular/core';
import {GetDataService} from "../../service/get-data.service";
import { ParamsType, StatusType, MockInterfaceResultData, DataSourceType } from './ssl-identy-interface';
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {MatTable} from "@angular/material/table";

@Component({
  selector: 'app-ssl-identy',
  templateUrl: './ssl-identy.component.html',
  styleUrls: ['./ssl-identy.component.scss']
})
export class SslIdentyComponent implements AfterViewInit{
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<DataSourceType>;
  dataSource: DataSourceType[] = [];
  dataStructure = [
    {key: "渠道", value: "channel", width: "70px"},
    {key: "应用", value: "name", width: "135px"},
    {key: "内容", value: "content", width: "auto"},
    {key: "日期", value: "created_at", width: "150px"},
    {key: "AI", value: "ai", width: "120px"},
  ];
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['channel', 'name', 'content', 'created_at', 'ai', 'handle'];
  constructor() {
    this.dataSource = MockInterfaceResultData.identys.results;
  }

  ordering = '-created_at';

  sortData(value: string) {
    if(this.ordering.includes(value)) {
      this.ordering = `-created_at`
    }else {
      this.ordering = `${value},${this.ordering}`
    }

  }

  ngAfterViewInit(): void {

    this.table.dataSource = this.dataSource;
  }
}
