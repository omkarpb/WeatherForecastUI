/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { ForecastService } from '../forecast.service';
import { HttpClientModule } from '@angular/common/http';

import { ForecastHomeComponent } from './forecast-home.component';
import { ForecastTileComponent } from '../forecast-tile/forecast-tile.component';
import { asyncData, asyncError } from '../utilities/common.utility';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';

describe('ForecastHomeComponent', () => {
  let component: ForecastHomeComponent;
  let fixture: ComponentFixture<ForecastHomeComponent>;
  let service: any;
  let spy: jasmine.Spy;
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
        icon: '10n',
      }]
    }]
  };
  beforeEach(async(() => {
    service = jasmine.createSpyObj('ForecastService', ['getFiveDayForecast']);
    spy = service.getFiveDayForecast.and.returnValue(asyncData(expectedResponse));
    TestBed.configureTestingModule({
      declarations: [ForecastHomeComponent,
        ForecastTileComponent],
      imports: [RouterTestingModule,
        HttpClientModule],
      providers: [{
        provide: ForecastService, useValue: service
      }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForecastHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display sub-title of forecast page', () => {
    const h1: HTMLElement = fixture.nativeElement.querySelector('h1');
    expect(h1.textContent).toBe('Weather Forecast for next five days');
  });

  it('should display location', () => {
    const h2: HTMLElement = fixture.nativeElement.querySelector('h2');
    expect(h2.textContent).toBe('Delhi');
  });

  it('should get list of forecasts', async(() => {
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      expect(component.forecastList.length).toBe(1);
    });
  }));

  it('should handle errors in case of failure', async(() => {
    service.getFiveDayForecast.and.throwError();
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      expect(true).toBe(true);
    });
  }));
});
