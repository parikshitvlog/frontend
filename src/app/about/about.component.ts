import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AboutService } from '../about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent  implements OnInit{

  loginfrom !: FormGroup;
  isSuperAdmin : boolean | undefined;
  loginUser : string = "isSuperAdmin"; 
  constructor (public aboutService: AboutService, private fb: FormBuilder ) {}

  ngOnInit(): void {
    this.aboutService.aboutServiceData();
    this .loginfrom = this.fb.group({
      Username: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required]),
      Email: new FormControl('',[Validators.required]),
      Mobile: new FormControl('',[Validators.required]),
      pancard: new FormControl('',[Validators.required])
    })
    
  }
  onSubmit(){
    console.log(this.loginfrom.value);
  }


  onUserchange(e:any){
    if(e === "isSuperAdmin"){
      this.isSuperAdmin = true ;
    } else{
      this.isSuperAdmin = false;
    }
  }

}
