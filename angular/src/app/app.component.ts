import { Component } from '@angular/core';
import { CurrentWeatherComponent } from './current-weather/current-weather.component';
import { DaysForecastComponent } from './days-forecast/days-forecast.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TodaysHighlightsComponent } from './todays-highlights/todays-highlights.component';
@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [
        NavbarComponent,
        CurrentWeatherComponent,
        DaysForecastComponent,
        TodaysHighlightsComponent,
    ],
})
export class AppComponent {
    title = 'weatherio';
}
