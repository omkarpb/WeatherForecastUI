import { Component, OnInit, Input } from '@angular/core';
import { ForecastService } from '../forecast.service';
import { ForecastModel } from '../models/forecast.model';
import * as util from 'util';
import { config } from '../../config';
import { handleError } from '../utilities/common.utility';
@Component({
  selector: 'app-forecast-home',
  templateUrl: './forecast-home.component.html',
  styleUrls: ['./forecast-home.component.css']
})
export class ForecastHomeComponent implements OnInit {
  forecastList: ForecastModel[] = [];
  constructor(private forecastService: ForecastService) { }

  ngOnInit() {
    this.getFiveDayForecast();
  }

  private getFiveDayForecast() {
    this.forecastService.getFiveDayForecast().subscribe((response: object) => {
      const forecasts: ForecastModel[] = [];
      const result: any[] = response['list'];
      result.forEach((value) => {
        forecasts.push({
          date: value.dt_txt,
          temp: value.main.temp,
          minTemp: value.main.temp_min,
          maxTemp: value.main.temp_max,
          pressure: value.main.pressure,
          humidity: value.main.humidity,
          description: value.weather[0].description,
          icon: util.format(config.WeatherIconUrl, value.weather[0].icon),
        } as ForecastModel);
      });
      this.forecastList = forecasts;
    }, handleError);
  }
}
