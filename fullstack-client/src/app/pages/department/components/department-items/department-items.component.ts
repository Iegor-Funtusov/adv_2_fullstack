import { Component, OnInit } from '@angular/core';
import { DepartmentResponseDto } from '../../../../model';
import { DepartmentApiService } from '../../../../service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-department-items',
  templateUrl: './department-items.component.html',
  styleUrls: ['./department-items.component.scss']
})
export class DepartmentItemsComponent implements OnInit {

  departments: DepartmentResponseDto[] | undefined;

  constructor(private _departmentApiService: DepartmentApiService, private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit(): void {
    this._loadAll();
  }

  loadById(id: number): void {
    this._router.navigate([id], { relativeTo: this._route });
  }

  deleteById(id: number): void {
    this._departmentApiService.deleteById(id).subscribe(() => {
      window.location.reload();
    });
  }

  addDepartment(): void {
    this._router.navigate(['new'], { relativeTo: this._route });
  }

  private _loadAll(): void {
    this._departmentApiService.loadAll().subscribe(departments => {
      this.departments = departments;
    });
  }
}
