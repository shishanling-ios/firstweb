import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class NewsHomeService {

  constructor(private http:HttpClient) {
  }

  getCenterNewsDatas(){
    return  this.http.get('/assets/json/home-center-news.json');
  }

}
