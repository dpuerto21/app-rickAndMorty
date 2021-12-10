import { Component, OnInit } from '@angular/core';
import {
  ApiResultPersonajes,
  InfoResults,
  Personaje,
} from '../../demo/domain/personajes.interfaces';

import { PersonajesService } from '../../demo/service/personajes.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.scss'],
})
export class PersonajesComponent implements OnInit {
  page = 1;
  alldata: ApiResultPersonajes;
  info: InfoResults;
  personajes: Personaje[];

  constructor(private personasjesService: PersonajesService) {}

  ngOnInit() {
    this.results();
  }

  results() {
    this.personasjesService.getResultsAll().subscribe(resp => {
      console.log(resp);
      this.alldata = resp;

      this.personajes = resp.results;
    });
  }
}
