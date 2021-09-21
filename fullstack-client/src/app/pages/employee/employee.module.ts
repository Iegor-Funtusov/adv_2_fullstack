import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeNewComponent, EmployeeItemsComponent, EmployeeDetailsComponent } from './components';
import { EmployeeRoutingModule } from "./employee-routing.module";

@NgModule({
  declarations: [
    EmployeeNewComponent,
    EmployeeItemsComponent,
    EmployeeDetailsComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule
  ]
})
export class EmployeeModule { }
