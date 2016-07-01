import {
  Component,
  provide
} from '@angular/core';

import {
  MapsAPILoader,
  NoOpMapsAPILoader,
  MouseEvent,
  GOOGLE_MAPS_DIRECTIVES,
} from 'angular2-google-maps/core';



@Component({
  selector: 'my-map',
  directives: [GOOGLE_MAPS_DIRECTIVES],
  styles: [`
    .sebm-google-map-container {
       width: 90%;
       height: 250px;
     }
  `],
  template: `
    <sebm-google-map
      [latitude]="lat"
      [longitude]="lng"
      [zoom]="zoom"
      [disableDefaultUI]="false"
      [zoomControl]="false"
      (mapClick)="mapClicked($event)">

      <sebm-google-map-marker
          *ngFor="let m of markers; let i = index"
          (markerClick)="clickedMarker(m.label, i)"
          [latitude]="m.lat"
          [longitude]="m.lng"
          [label]="m.label"
          [markerDraggable]="m.draggable"
          (dragEnd)="markerDragEnd(m, $event)">

        <sebm-google-map-info-window>
          <strong>InfoWindow content</strong>
        </sebm-google-map-info-window>

      </sebm-google-map-marker>

    </sebm-google-map>
`})
export class MapComponent {
  // google maps zoom level
  zoom: number = 14;

  // initial center position for the map
  lat: number = 38.000034;
  lng: number = -122.522727;

  clickedMarker(label: string, index: number) {
    window.location.href = 'https://www.google.com/maps/place/Osher+Marin+JCC/@38.000043,-122.5232282,19z/data=!3m1!4b1!4m5!3m4!1s0x808599cef09f3d6d:0xce9bbc4fbe67e9!8m2!3d38.000043!4d-122.522681'
  }

  markerDragEnd(m: marker, $event: MouseEvent) {
    console.log('dragEnd', m, $event);
  }

  markers: marker[] = [
	  {
		  lat: 38.000034,
		  lng: -122.522727,
		  draggable: false
	}
  ]
}
// just an interface for type safety.
interface marker {
	lat: number;
	lng: number;
	label?: string;
	draggable: boolean;
}
