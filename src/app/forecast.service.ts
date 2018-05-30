import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';

import * as util from 'util';
import { ForecastModel } from './models/forecast.model';

import { config } from '../config';
import { forEach } from '@angular/router/src/utils/collection';

@Injectable()
export class ForecastService {

  constructor(private http: HttpClient) { }

  getFiveDayForecast(): Observable<object> {
    return this.http.get(`${config.forecastBase}/forecast?id=${config.cityIDDelhi}&appid=${config.APIKey}&units=metric`);
  }

  getFiveDayForecastByCity(cityName: string): Observable<object> {
    return this.http.get(`${config.forecastBase}/forecast?q=${cityName}&appid=${config.APIKey}&units=metric`);
  }
}
