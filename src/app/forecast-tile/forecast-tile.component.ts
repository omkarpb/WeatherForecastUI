import { Component, OnInit, Input } from '@angular/core';
import { ForecastModel } from '../models/forecast.model';

@Component({
  selector: 'app-forecast-tile',
  templateUrl: './forecast-tile.component.html',
  styleUrls: ['./forecast-tile.component.css']
})
export class ForecastTileComponent implements OnInit {
@Input() forecast: ForecastModel;
  constructor() { }

  ngOnInit() {
  }

}
