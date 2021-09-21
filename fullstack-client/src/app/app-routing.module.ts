import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'departments',
    pathMatch: 'full'
  },
  {
    path: 'departments',
    pathMatch: 'prefix',
    loadChildren: () => import('./pages/department/department.module').then(m => m.DepartmentModule)
  },
  {
    path: 'employees',
    pathMatch: 'prefix',
    loadChildren: () => import('./pages/employee/employee.module').then(m => m.EmployeeModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
