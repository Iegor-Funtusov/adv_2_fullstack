import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartmentDetailsComponent, DepartmentItemsComponent, DepartmentNewComponent } from './components';
import { DepartmentRoutingModule } from './department-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DepartmentItemsComponent,
    DepartmentDetailsComponent,
    DepartmentNewComponent
  ],
  imports: [
    CommonModule,
    DepartmentRoutingModule,
    ReactiveFormsModule
  ]
})
export class DepartmentModule {
}
