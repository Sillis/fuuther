import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { ApixuService } from '../apixu.service';
import { ActivatedRoute, Router } from '@angular/router';
import { WeatherLine } from '../weather/weatherLine';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})

export class WeatherComponent implements OnInit {

  public weatherSearchForm: FormGroup;
  public weatherData: any;
  isShow = false;

  data: any;
  f: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private apixuService: ApixuService,
    private route: ActivatedRoute,
    private router: Router,
    private weatherService: WeatherService
    ) {}

  ngOnInit() {
    this.weatherSearchForm = this.formBuilder.group({
      location: ['']
    });
    this.data = this.route.snapshot.data;
    console.log(this.route.snapshot.data);

    this.buildForm(this.data);
  }

  sendToAPIXU(formValues) {
    this.apixuService.getWeather(formValues.location).subscribe(data => {
      this.weatherData = data;
      console.log(this.weatherData);
    });
  }

  searchPlace() {
    if(!this.isShow){
      this.isShow = !this.isShow;
    }
  }

  buildForm(data: WeatherService){
    this.f = this.formBuilder.group({
      weatherLines: this.formBuilder.array([])
    });
    this.initWeatherLines(data);
  }

  initWeatherLines(data) {
    const control = <FormArray>this.f.controls['weatherLines'];
    if (data && data.weatherLine.length > 0) {
      this.data.weatherLine.forEach(x => {
        control.push(this.initWeather(x));
      });
    } else {
      control.push(this.initWeather());
    }
  }

  initWeather(weatherLine?: ApixuService): FormGroup {
    weatherLine = weatherLine ? weatherLine : new WeatherService();
    return this.formBuilder.group({
      city: [this.weatherData?.name ||'', Validators.required],
      temperature: [this.weatherData?.main.temp ||''],
      feelslike: [this.weatherData?.main.feels_like ||'']
    });
  }
}
