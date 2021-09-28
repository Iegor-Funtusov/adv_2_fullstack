import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DepartmentResponseDto, EmployeeResponseDto } from '../../../../model';
import { EmployeeApiService, DepartmentApiService } from '../../../../service';
import { appConst } from '../../../../app.const';

@Component({
  selector: 'app-employee-items',
  templateUrl: './employee-items.component.html',
  styleUrls: ['./employee-items.component.scss']
})
export class EmployeeItemsComponent implements OnInit {

  employees: EmployeeResponseDto[] | undefined;
  department: DepartmentResponseDto | undefined;
  dateFormat = appConst.dateFormat;

  constructor(
    private _departmentApiService: DepartmentApiService,
    private _employeeApiService: EmployeeApiService,
    private _router: Router,
    private _route: ActivatedRoute) { }

  ngOnInit(): void {
    const departmentId: string | null = this._route.snapshot.queryParamMap.get('departmentId');
    if (departmentId) {
      this._departmentApiService.loadById(Number(departmentId)).subscribe(department => {
        this.department = department;
      });
      this._loadAllByDepartment(departmentId);
    } else {
      this._loadAll();
    }
  }

  loadById(id: number): void {
    this._router.navigate([id], { relativeTo: this._route });
  }

  deleteById(id: number): void {
    this._employeeApiService.deleteById(id).subscribe(() => {
      window.location.reload();
    });
  }

  private _loadAll(): void {
    this._employeeApiService.loadAll().subscribe(employees => {
      this.employees = employees;
    });
  }

  private _loadAllByDepartment(departmentId: string): void {
    this._employeeApiService.loadAllByDepartment(departmentId).subscribe(employees => {
      this.employees = employees;
    });
  }
}
