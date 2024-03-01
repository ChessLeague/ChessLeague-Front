import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TournamentService } from '../tournament.service';
import { TournamentDetail } from '../tournament-detail';
import { Map, marker, tileLayer } from 'leaflet';

@Component({
  selector: 'app-tournament-list',
  templateUrl: './tournament-list.component.html',
  styleUrls: ['./tournament-list.component.css']
})
export class TournamentListComponent implements OnInit {

  tournaments: Array<TournamentDetail> = [];

  selected: Boolean = false;
  selectedTournament!: TournamentDetail;
  p: number = 1;
  itemsPerPage: number = 4;
  pagesNumber: number = 1;
  pagination: boolean = false;

  constructor(private tournamentService: TournamentService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.checkRoute();
    this.getTournaments();
  }

  getTournaments(): void {
    this.tournamentService.getTournaments().subscribe(tournaments => {
      this.tournaments = tournaments;
      this.pagesNumber = Math.ceil(this.tournaments.length / this.itemsPerPage);
    });
  }

  onSelected(tournament: TournamentDetail): void {
    this.selected = true;
    this.selectedTournament = tournament;
  }

  checkRoute() {
    const routePath = this.route.snapshot.routeConfig?.path;
    if (routePath === 'list') {
      this.itemsPerPage = 4;
      this.pagination = true;
    }
  }

  ngAfterViewInit(): void {


    const map = new Map('map').setView([4.6584,-74.0944], 13);
    tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    subdomains: 'abcd',
    maxZoom: 20
  }).addTo(map);
  
  const markerItem = marker([4.65697,-74.08838]).addTo(map).bindPopup('Torneo de Fin de Año (Biblioteca Virgilio Barco, Bogotá, Colombia)');
  const markerItem2 = marker([4.60046,-74.06290]).addTo(map).bindPopup('Torneo Universitario de Ajedrez (Bloque GA, Universidad de los Andes, Bogotá, Colombia)');
  const markerItem3 = marker([4.64084,-74.09713]).addTo(map).bindPopup('Torneo de Ajedrez de Cundinamarca (Gobernación de Cundinamarca, Bogotá, Colombia)');
  const markerItem4 = marker([4.60243,-74.06595]).addTo(map).bindPopup('Torneo UniAndes 2024-1 (Edificio RGD, Bogotá, Colombia)');
  const markerItem5 = marker([10.507420410746027, -75.47158389999998]).addTo(map).bindPopup('Torneo Caribe Edición Cartagena 2024 (Sede Caribe Universidad de los Andes, Cartagena, Colombia)');
  const markerItem6 = marker([4.663790689083496, -74.0952783826106]).addTo(map).bindPopup('Torneo Nacional de Ajedrez 2024 (Ministerio de Deportes, Bogotá, Colombia)');
  const markerItem7 = marker([46.5103,6.6280]).addTo(map).bindPopup('FIDE World Cup, Laussane, Switzerland');
  const markerItem8 = marker([55.6900,12.5656]).addTo(map).bindPopup('International chess championship, Copenhagen, Denmark');
  
  map.fitBounds([
    [markerItem.getLatLng().lat, markerItem.getLatLng().lng],
    [markerItem2.getLatLng().lat, markerItem2.getLatLng().lng]
  ])
  
  
  }

}
