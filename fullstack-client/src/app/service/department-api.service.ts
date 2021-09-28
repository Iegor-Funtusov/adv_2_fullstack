import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { DepartmentResponseDto, DepartmentRequestDto } from '../model';
import { appConst } from '../app.const';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DepartmentApiService {

  private _apiUrl = environment.apiUrl + appConst.departmentsPath;

  constructor(private _apiService: ApiService<DepartmentRequestDto, DepartmentResponseDto>) { }

  loadAll(): Observable<DepartmentResponseDto[]> {
    return this._apiService.loadAll(this._apiUrl);
  }

  loadById(id: number): Observable<DepartmentResponseDto> {
    return this._apiService.loadById(this._apiUrl, id);
  }

  deleteById(id: number): Observable<boolean> {
    return this._apiService.deleteById(this._apiUrl, id);
  }

  create(dto: DepartmentRequestDto): Observable<boolean> {
    return this._apiService.create(this._apiUrl, dto);
  }

  update(id: number, dto: DepartmentRequestDto): Observable<boolean> {
    return this._apiService.update(this._apiUrl, id, dto);
  }
}
