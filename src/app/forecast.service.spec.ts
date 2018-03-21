/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ForecastService } from './forecast.service';
import { HttpClientModule, HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { ForecastModel } from './models/forecast.model';
import { asyncData, asyncError } from './utilities/common.utility';

describe('ForecastService', () => {
  let httpClientSpy: { get: jasmine.Spy };
  let service: any;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [ForecastService]
    });
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new ForecastService(<any>httpClientSpy);
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });

  it('should get list of forecast', () => {
    const expectedResponse: any = {
      list: [{
        dt_txt: new Date('2018-01-01'),
        main: {
          temp: 30,
          temp_min: 20,
          temp_max: 40,
          pressure: 20,
          humidity: 10,
        },
        weather: [{
          description: 'Cloudy',
          icon: '010',
        }]
      }]
    };
    httpClientSpy.get.and.returnValue(asyncData(expectedResponse));
    service.getFiveDayForecast().subscribe((response: any) => {
      expect(response).toBeTruthy();
      expect(response['list'][0]['main']['temp']).toBe(30);
    });
  });

  it('should handle error occurred from backend', () => {
    const error = new Error('API not available this time. Please try again later');
    httpClientSpy.get.and.returnValue(asyncError(error));
    service.getFiveDayForecast().subscribe((response) => {
      expect(true).toBe(false);
    }, (err) => {
      expect(err).toBeTruthy();
      expect(err).not.toBeNull();
    });
  });
});
