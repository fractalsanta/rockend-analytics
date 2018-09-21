import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as models from '../model/models';

const URL = 'http://propmanagementapi.azurewebsites.net/propertymanagement/2009/currentmonth';

@Injectable()
// @Injectable()
export class ApiTest {
  constructor(private http: HttpClient) {}

  getCurrentMonth(): Observable<models.CurrentMonth[]> {
    return this.http.get<models.CurrentMonth[]>(URL);
  }

  getgainLostByMonth(): Observable<models.GainLostByMonth[]> {
    return this.http.get<models.GainLostByMonth[]>(URL);
  }

  getModelError(): Observable<models.ModelError[]> {
    return this.http.get<models.ModelError[]>(URL);
  }
  getPropertyDataByQuarter(): Observable<models.PropertyDataByQuarter[]> {
    return this.http.get<models.PropertyDataByQuarter[]>(URL);
  }
  getPropertyType(): Observable<models.PropertyType[]> {
    return this.http.get<models.PropertyType[]>(URL);
  }
  getRentAmountByMonth(): Observable<models.ManagementFee[]> {
    return this.http.get<models.ManagementFee[]>(URL);
  }
  getSuburb(): Observable<models.Suburb[]> {
    return this.http.get<models.Suburb[]>(URL);
  }
}
