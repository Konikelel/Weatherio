import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { TodaysHighlightsComponent } from './todays-highlights/todays-highlights.component';
@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [NavbarComponent, TodaysHighlightsComponent],
})
export class AppComponent {
    title = 'weatherio';
}
