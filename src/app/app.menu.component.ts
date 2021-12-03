import { Component, OnInit } from '@angular/core';
import { AppMainComponent } from './app.main.component';

@Component({
	selector: 'app-menu',
	templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {
	model: any[];

	constructor(public appMain: AppMainComponent) {}

	ngOnInit() {
		this.model = [
			// {
			// 	label: 'Cards RIck',
			// 	icon: 'pi pi-home',
			// 	items: [ { label: 'card/Morty', icon: 'pi pi-fw pi-id-card', routerLink: [ '/card/Morty' ] } ]
			// },
			{ separator: true },
			{
				label: 'Rick And Morty',
				icon: 'pi pi-fw pi-star',
				routerLink: [ '/uikit' ],
				items: [
					{ label: 'Table', icon: 'pi pi-fw pi-table', routerLink: [ '/uikit/table' ] },
					{ label: 'personajes', icon: 'pi pi-fw pi-users ', routerLink: [ '/personajes' ] },
					{ label: 'Episodes', icon: 'pi pi-fw pi-chevron-up', routerLink: [ '/episodes' ] },
					{ label: 'Ubicacion ', icon: 'pi pi-fw pi-mobile', routerLink: [ '/ubicaion' ] },
					{ label: 'Busqueda ', icon: 'pi pi-fw pi-search', routerLink: [ '/busqueda' ] }
				]
			},

			{ separator: true },
			{
				label: 'Otros',
				icon: 'pi pi-fw pi-briefcase',
				routerLink: [ '/pages' ],
				items: [
					{ label: 'Tabla FindAll', icon: 'pi pi-fw pi-pencil', routerLink: [ '/pages/crud' ] },

					{ label: 'Login', icon: 'pi pi-fw pi-sign-in', routerLink: [ '/login' ] },

					{ label: 'Error', icon: 'pi pi-fw pi-times-circle', routerLink: [ '/error' ] }
				]
			}
		];
	}
}
