import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartmentDetailsComponent, DepartmentItemsComponent, DepartmentNewComponent } from "./components";
import { DepartmentRoutingModule } from "./department-routing.module";

@NgModule({
  declarations: [
    DepartmentItemsComponent,
    DepartmentDetailsComponent,
    DepartmentNewComponent
  ],
  imports: [
    CommonModule,
    DepartmentRoutingModule
  ]
})
export class DepartmentModule { }
