import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DepartmentResponseDto } from '../../../../model';
import { DepartmentApiService } from '../../../../service';
import { appConst } from "../../../../app.const";

@Component({
  selector: 'app-department-details',
  templateUrl: './department-details.component.html',
  styleUrls: ['./department-details.component.scss']
})
export class DepartmentDetailsComponent implements OnInit {

  private _id: number | undefined;
  department: DepartmentResponseDto | undefined;
  dateFormat = appConst.dateFormat;

  constructor(private _route: ActivatedRoute, private _router: Router, private _departmentApiService: DepartmentApiService) { }

  ngOnInit(): void {
    this._id = Number(this._route.snapshot.paramMap.get('id'));
    this._departmentApiService.loadById(this._id).subscribe(department => {
      this.department = department;
    });
  }

  showAllEmployees() {
    this._router.navigateByUrl('employees?departmentId=' + this.department?.id);
  }

  addNewEmployees() {
    this._router.navigateByUrl('employees/new?departmentId=' + this.department?.id);
  }
}
