import {bootstrap}    from '@angular/platform-browser-dynamic';
import {AppComponent} from './app.component';
import {provide} from '@angular/core';
import {GOOGLE_MAPS_PROVIDERS, LazyMapsAPILoaderConfig} from 'angular2-google-maps/core';

// ANGULAR2_GOOGLE_MAPS_PROVIDERS is required here
bootstrap(AppComponent, [
  GOOGLE_MAPS_PROVIDERS,
  provide(LazyMapsAPILoaderConfig, {useFactory: () => {
    let config = new LazyMapsAPILoaderConfig();
    config.apiKey = 'AIzaSyDVaRt8QCO_EZ3Up4jMEmt6WurvKAGRVT0';
    return config;
  }})
])
  // If you don't want to let angular2-google-maps load the Google Maps API script,
  // you can use the NoOpMapsAPILoader like this:
  // provide(MapsAPILoader, {useClass: NoOpMapsAPILoader})
