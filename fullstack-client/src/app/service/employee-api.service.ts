import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { appConst } from '../app.const';
import { ApiService } from './api.service';
import { EmployeeRequestDto, EmployeeResponseDto } from '../model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeApiService {

  private _apiUrl = environment.apiUrl + appConst.employeesPath;

  constructor(private _apiService: ApiService<EmployeeRequestDto, EmployeeResponseDto>) { }

  loadAll(): Observable<EmployeeResponseDto[]> {
    return this._apiService.loadAll(this._apiUrl);
  }

  loadAllByDepartment(departmentId: string): Observable<EmployeeResponseDto[]> {
    let httpParams = new HttpParams();
    httpParams = httpParams.append('departmentId', departmentId);
    return this._apiService.loadAllByParams(this._apiUrl, httpParams);
  }

  loadById(id: number): Observable<EmployeeResponseDto> {
    return this._apiService.loadById(this._apiUrl, id);
  }

  deleteById(id: number): Observable<boolean> {
    return this._apiService.deleteById(this._apiUrl, id);
  }

  create(dto: EmployeeRequestDto): Observable<boolean> {
    return this._apiService.create(this._apiUrl, dto);
  }

  update(id: number, dto: EmployeeRequestDto): Observable<boolean> {
    return this._apiService.update(this._apiUrl, id, dto);
  }
}
