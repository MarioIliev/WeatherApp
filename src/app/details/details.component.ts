import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { ActivatedRoute } from '@angular/router';
import { Weather } from '../weather';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  displayToday = true;
  displayForecast = false;
  isLoadingInProgress = true;

  currentTown =
    {
      'location': {
        'localtime': String
      },
      'current': {
        'condition': {
          'code': String,
          'icon': String,
          'text': String
        }
      },
      'forecast': {
        'forecastday': [
          {
            'condition': {
              'code': String,
              'icon': String,
              'text': String
            }
          }
        ]
      }
    }

  constructor(private _weatherService: WeatherService, private _route: ActivatedRoute) { }

  ngOnInit() {
    const town = this._route.snapshot.paramMap.get('town');
    this._weatherService.getWeatherByTown(town)
      .subscribe(
        res => {
          this.currentTown = res,
          this.isLoadingInProgress = false;
        },
        err => console.log(err)
      )
  }

  displayTodayBlock() {
    this.displayToday = true;
    this.displayForecast = false;
  }

  displayForecastBlock() {
    this.displayToday = false;
    this.displayForecast = true;
  }
}
