import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from "@angular/common";
import { DepartmentDetailsComponent, DepartmentItemsComponent, DepartmentNewComponent } from "./components";

const routes: Routes = [
  {
    path: '',
    component: DepartmentItemsComponent
  },
  {
    path: ':id',
    component: DepartmentDetailsComponent
  },
  {
    path: 'new',
    component: DepartmentNewComponent
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
