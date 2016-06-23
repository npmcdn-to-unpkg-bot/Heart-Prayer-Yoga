import {bootstrap}    from '@angular/platform-browser-dynamic';
import {AppComponent} from './app.component';

import {
  GOOGLE_MAPS_PROVIDERS,
} from 'angular2-google-maps/core';

// ANGULAR2_GOOGLE_MAPS_PROVIDERS is required here
bootstrap(AppComponent, [
  GOOGLE_MAPS_PROVIDERS,
  // If you don't want to let angular2-google-maps load the Google Maps API script,
  // you can use the NoOpMapsAPILoader like this:
  // provide(MapsAPILoader, {useClass: NoOpMapsAPILoader})
])
