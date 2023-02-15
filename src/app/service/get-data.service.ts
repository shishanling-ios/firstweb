import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class GetDataService {
  constructor(private http: HttpClient) { }
  // 获取 Identy 列表
  getIdenty(paramsObj:any) {
    return this.http.get('/uniform-api/content/', {params: paramsObj});
  }
}
