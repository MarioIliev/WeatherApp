import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private _http: HttpClient) { }

  public archive = [];
  private _weatherUrl = "http://api.apixu.com/v1/forecast.json?key=29d83fa2298a47d29bb121845161212&q="

  getWeatherByTown(town) {
    let lastSearches = localStorage.getItem('lastSearches');
    let lastSearchesObject = [];
    if (!lastSearches) {
      lastSearchesObject = [town];

      localStorage.setItem('lastSearches', JSON.stringify(lastSearchesObject));
    } else {
      lastSearchesObject = JSON.parse(lastSearches);
      lastSearchesObject.splice(0, 0, town);
      if (lastSearchesObject.length > 5) {
        lastSearchesObject.pop();
      }

      localStorage.setItem('lastSearches', JSON.stringify(lastSearchesObject));
    }
  
    return this._http.get<any>(this._weatherUrl + '{' + town + '}&days=7');
  }

  allStorage() {
    let lastSearches = localStorage.getItem('lastSearches');

    return lastSearches = JSON.parse(lastSearches);
  }
}