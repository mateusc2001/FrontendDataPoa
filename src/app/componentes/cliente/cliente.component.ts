import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent implements OnInit {

  lat: number = -30.059434;
  lng: number = -51.173111;
  zoom: number = 12;
  
  nome: string;

  constructor() { }

  ngOnInit() {
  }


}
