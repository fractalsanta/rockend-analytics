import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { ApiTest } from './shared/api/data.service';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ComponentsModule } from '../components/components.module';
import { FilterPopOverModule } from '../pages/filter-pop-over/filter-pop-over.module';
import { PropertyPage } from '../components/property/property';

import { HttpClient, HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [MyApp, HomePage, PropertyPage],
  imports: [BrowserModule, HttpClientModule, ComponentsModule, IonicModule.forRoot(MyApp), IonicModule, FilterPopOverModule],
  bootstrap: [IonicApp],
  entryComponents: [MyApp, HomePage, PropertyPage],
  providers: [ApiTest, HttpClient, StatusBar, SplashScreen, { provide: ErrorHandler, useClass: IonicErrorHandler }]
})
export class AppModule {}
