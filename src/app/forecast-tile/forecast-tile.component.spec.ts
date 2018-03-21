/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';

import { ForecastTileComponent } from './forecast-tile.component';
import * as util from 'util';
import { config } from '../../config';

describe('ForecastTileComponent', () => {
  let component: ForecastTileComponent;
  let fixture: ComponentFixture<ForecastTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ForecastTileComponent],
      imports: [RouterTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForecastTileComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display one tile of forecast- date', () => {
    component.forecast = {
      date: new Date('2018-01-01'),
      temp: 30,
      maxTemp: 40,
      minTemp: 20,
      pressure: 50,
      humidity: 10,
      description: 'clear sky',
      icon: util.format(config.WeatherIconUrl, '10n'),
    };
    fixture.detectChanges();
    const el: HTMLElement = fixture.nativeElement.querySelector('div p:first-child');
    expect(el.textContent).toBe('01 Jan 2018');
  });

  it('should display one tile of forecast - description', () => {
    component.forecast = {
      date: new Date('2018-01-01'),
      temp: 30,
      maxTemp: 40,
      minTemp: 20,
      pressure: 50,
      humidity: 10,
      description: 'clear sky',
      icon: util.format(config.WeatherIconUrl, '10n'),
    };
    fixture.detectChanges();
    const el: HTMLElement = fixture.nativeElement.querySelector('div.forecast-details p:first-child span');
    expect(el.textContent).toBe(' clear sky');
  });

  it('should not display any tile of forecast', () => {
    component.forecast = undefined;
    const el: HTMLElement = fixture.nativeElement.querySelector('div p:first-child');
    expect(el).toBeNull();
  });
});
