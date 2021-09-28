import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DepartmentDetailsComponent, DepartmentItemsComponent, DepartmentNewComponent } from './components';

const routes: Routes = [
  {
    path: '',
    component: DepartmentItemsComponent
  },
  {
    path: 'new',
    component: DepartmentNewComponent
  },
  {
    path: ':id',
    component: DepartmentDetailsComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class DepartmentRoutingModule { }
