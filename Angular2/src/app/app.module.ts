import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { Employeecomponent } from './Employee/Employee.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [AppComponent, Employeecomponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
