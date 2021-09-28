import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeApiService } from '../../../../service';
import { appConst } from '../../../../app.const';
import { EmployeeResponseDto } from '../../../../model';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit {

  private _id: number | undefined;
  employee: EmployeeResponseDto | undefined;
  dateFormat = appConst.dateFormat;

  constructor(private _route: ActivatedRoute, private _router: Router, private _employeeApiService: EmployeeApiService) { }

  ngOnInit(): void {
    this._id = Number(this._route.snapshot.paramMap.get('id'));
    this._employeeApiService.loadById(this._id).subscribe(employee => {
      this.employee = employee;
    });
  }
}
