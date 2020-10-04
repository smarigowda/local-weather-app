import { Injectable } from '@angular/core'
import { HttpClient, HttpParams } from '@angular/common/http'

import { environment } from '../../environments/environment'

interface ICurrentWeatherData {
  weather: [
    {
      description: string
      icon: string
    }
  ]
  main: {
    temp: number
  }
  sys: {
    country: string
  }
  dt: number
  name: string
}

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private httpClient: HttpClient) {}
  getCurrentWeather(city: string, country: string) {
    const params = new HttpParams()
      .set('q', `${city},${country}`)
      .set('appid', `${environment.appId}`)

    const url = `${environment.baseUrl}api.openweathermap.org/data/2.5/weather`
    return this.httpClient.get<ICurrentWeatherData>(url, { params })
  }
}
