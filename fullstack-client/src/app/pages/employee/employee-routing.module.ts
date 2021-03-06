import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { EmployeeDetailsComponent, EmployeeItemsComponent, EmployeeNewComponent } from "./components";

const routes: Routes = [
  {
    path: '',
    component: EmployeeItemsComponent
  },
  {
    path: 'new',
    component: EmployeeNewComponent
  },
  {
    path: ':id',
    component: EmployeeDetailsComponent
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
export class EmployeeRoutingModule { }
