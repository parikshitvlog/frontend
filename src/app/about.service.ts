import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AboutService {

  constructor() { }


  aboutServiceData(){
    console.log("About Serive is called");
    alert("gava bhai");
  }
}
