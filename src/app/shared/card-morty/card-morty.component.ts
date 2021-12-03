import { Component, Input, OnInit } from '@angular/core';
import { Personaje } from '../../demo/domain/personajes.interfaces';

@Component({
	selector: 'app-card-morty',
	templateUrl: './card-morty.component.html',
	styleUrls: [ './card-morty.component.scss' ]
})
export class CardMortyComponent implements OnInit {
	ngOnInit(): void {}

	@Input() Personajes: Personaje;
}
