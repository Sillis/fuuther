export class WeatherLine implements InterfaceWeatherLine {
    city: string;
    temperature: string;
    feelslike: string;


constructor(obj: WeatherLine = {} as WeatherLine) {
    const {
        city = '',
        temperature = '',
        feelslike = ''
    } = obj;

    this.city = city;
    this.temperature = this.temperature;
    this.feelslike = feelslike;
    }
}

export interface InterfaceWeatherLine {
    city: string;
    temperature: string;
    feelslike: string;
}