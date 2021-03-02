import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {
  mapa: any
  polygon: any
  constructor() { }

  ngOnInit(): void {
    this.mapa = L.map('posicionMapa').setView([37.422274335063314, -122.08407897344395], 13);
    const trozos = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19
    })
    trozos.addTo(this.mapa)
    this.mapa = L.marker([37.422274335063314, -122.08407897344395]).addTo(this.mapa)
    .bindPopup('Estás son las instalaciones de esta <br> bonita página web. <br> Los envidiosos dirán que es mentira. :(')
    .openPopup();
  }

}
