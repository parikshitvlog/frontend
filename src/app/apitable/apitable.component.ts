import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apitable',
  templateUrl: './apitable.component.html',
  styleUrls: ['./apitable.component.css']
})
export class ApitableComponent implements OnInit {

  apiData:any;

  constructor( private http : HttpClient)  {}

  ngOnInit(): void{
    this.http.get('http://localhost:3000/posts').subscribe(res =>{
      console.log(res);
      this.apiData = res;
    })
  }

}
