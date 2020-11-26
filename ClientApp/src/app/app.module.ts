import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { allAppRoutes } from './routes';
import { ReactiveFormsModule } from '@angular/forms';
import { ApixuService } from './apixu.service';
import { CookieService } from 'ngx-cookie-service';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(allAppRoutes),
    ReactiveFormsModule
  ],
  providers: [ApixuService, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
