import { Component } from '@angular/core';
import { FiveDaysForecastComponent } from './five-days-forecast/five-days-forecast.component';
import { OneDayForecastComponent } from './one-day-forecast/one-day-forecast.component';
import { TodaysHighlightsComponent } from './todays-highlights/todays-highlights.component';
import { WeatherNowComponent } from './weather-now/weather-now.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    FiveDaysForecastComponent,
    OneDayForecastComponent,
    TodaysHighlightsComponent,
    WeatherNowComponent,
  ],
})
export class AppComponent {
  title = 'weatherio';
}
