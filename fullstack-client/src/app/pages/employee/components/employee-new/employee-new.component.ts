import { Component, OnInit } from '@angular/core';
import { EmployeeApiService } from '../../../../service';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeRequestDto } from '../../../../model';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-employee-new',
  templateUrl: './employee-new.component.html',
  styleUrls: ['./employee-new.component.scss']
})
export class EmployeeNewComponent implements OnInit {

  private _departmentId: number | undefined;

  employee: EmployeeRequestDto | undefined;

  employeeForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    birthDay: new FormControl()
  });

  constructor(private _employeeApiService: EmployeeApiService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit(): void {
    const departmentId: string | null = this._route.snapshot.queryParamMap.get('departmentId');
    this._departmentId = Number(departmentId);
  }

  create(): void {
    let employee = this.employeeForm.value as EmployeeRequestDto;
    if (this._departmentId != null) {
      employee.departmentId = this._departmentId;
    }
    this._employeeApiService.create(employee).subscribe(() => {
      this._router.navigateByUrl('departments/' + this._departmentId);
    });
  }
}
