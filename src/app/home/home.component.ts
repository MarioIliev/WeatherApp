import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  town: string;
  towns = this._weatherService.allStorage();

  constructor(private _router: Router, private _weatherService: WeatherService) { }

  ngOnInit() {
  }

  getWeather(){
    this._router.navigate(['/details', this.town]);
  }
}
