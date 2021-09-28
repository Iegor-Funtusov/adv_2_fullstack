import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { DepartmentApiService } from '../../../../service';
import { DepartmentType } from '../../../../model';

@Component({
  selector: 'app-department-new',
  templateUrl: './department-new.component.html',
  styleUrls: ['./department-new.component.scss']
})
export class DepartmentNewComponent implements OnInit {

  departmentForm = new FormGroup({
    name: new FormControl(''),
    departmentType: new FormControl()
  });
  departmentTypeItems = DepartmentType;

  constructor(private _departmentApiService: DepartmentApiService, private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit(): void { }

  create(): void {
    this._departmentApiService.create(this.departmentForm.value).subscribe(() => {
      this._router.navigate(['/'], { relativeTo: this._route });
    });
  }
}
