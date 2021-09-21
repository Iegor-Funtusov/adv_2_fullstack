import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {DepartmentResponseDto} from "../model/department-response-dto";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  private _api = "http://localhost:8080/api/departments"

  constructor(private _http: HttpClient) { }

  loadAll(): Observable<DepartmentResponseDto[]> {
    return this._http.get(this._api, this._getOptions()).pipe(
      map((res: any) => {
        return res.data;
      })
    );
  }

  private _getOptions(): any {
    return {
      headers: new HttpHeaders({})
    };
  }
}
