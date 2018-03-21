import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ForecastHomeComponent } from './forecast-home/forecast-home.component';
import { ForecastTileComponent } from './forecast-tile/forecast-tile.component';
import { ForecastService } from './forecast.service';
@NgModule({
  declarations: [
    AppComponent,
    ForecastHomeComponent,
    ForecastTileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [ForecastService],
  bootstrap: [AppComponent]
})
export class AppModule { }
