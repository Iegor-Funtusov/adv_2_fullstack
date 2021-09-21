import { Component, OnInit } from '@angular/core';
import {DepartmentResponseDto} from "../../../../model/department-response-dto";
import {HttpServiceService} from "../../../../service/http-service.service";

@Component({
  selector: 'app-department-items',
  templateUrl: './department-items.component.html',
  styleUrls: ['./department-items.component.scss']
})
export class DepartmentItemsComponent implements OnInit {

  departments: DepartmentResponseDto[] | undefined;

  constructor(private _httpService: HttpServiceService) { }

  ngOnInit(): void {
    this._loadAll();
  }

  private _loadAll(): void {
    this._httpService.loadAll().subscribe(departments => {
      this.departments = departments;
    });
  }
}
