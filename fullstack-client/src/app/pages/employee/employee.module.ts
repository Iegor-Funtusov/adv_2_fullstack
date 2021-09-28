import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeNewComponent, EmployeeItemsComponent, EmployeeDetailsComponent } from './components';
import { EmployeeRoutingModule } from "./employee-routing.module";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    EmployeeNewComponent,
    EmployeeItemsComponent,
    EmployeeDetailsComponent
  ],
    imports: [
        CommonModule,
        EmployeeRoutingModule,
        ReactiveFormsModule
    ]
})
export class EmployeeModule { }
