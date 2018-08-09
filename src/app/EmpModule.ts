import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { EmployeeComponent } from './EmployeeComponent';

@NgModule({
  declarations: [
    EmployeeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [EmployeeComponent]
})


export class AppModule { }
