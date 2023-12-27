import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { BlogsComponent } from './blogs/blogs.component';
import { ApitableComponent } from './apitable/apitable.component';
import { HttpClientModule } from '@angular/common/http';
import { DashbordComponent } from './dashbord/dashbord.component';



@NgModule({
  declarations: [
    AppComponent,
    ApitableComponent,
    HomeComponent,
    AboutComponent,
    BlogsComponent,
    DashbordComponent,
     

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,MaterialModule,ReactiveFormsModule,  
    BrowserAnimationsModule,HttpClientModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }