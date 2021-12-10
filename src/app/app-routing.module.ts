import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppMainComponent } from './app.main.component';
import { AppNotfoundComponent } from './pages/app.notfound.component';
import { AppErrorComponent } from './pages/app.error.component';
import { AppLoginComponent } from './pages/app.login.component';
import { TableDemoComponent } from './demo/view/tabledemo.component';
import { AppCrudComponent } from './pages/app.crud.component';
import { UbicacionComponent } from './pages/ubicacion/ubicacion.component';
import { PersonajesComponent } from './pages/personajes/personajes.component';
import { EpisodioComponent } from './pages/episodio/episodio.component';
import { BusquedasPadreComponent } from './pages/busquedas-padre/busquedas-padre.component';


@NgModule({
	imports: [
		RouterModule.forRoot(
			[
				{
					path: '',
					component: AppMainComponent,
					children: [
						{ path: 'uikit/table', component: TableDemoComponent },
						{ path: 'pages/crud', component: AppCrudComponent },
						{ path: 'episodes', component: EpisodioComponent },
						{ path: 'personajes', component: PersonajesComponent },
						{ path: 'ubicaion', component: UbicacionComponent },
						{ path: 'busqueda', component: BusquedasPadreComponent }
					]
				},
				{ path: 'error', component: AppErrorComponent },

				{ path: 'notfound', component: AppNotfoundComponent },
				{ path: 'login', component: AppLoginComponent },
				{ path: '**', redirectTo: '/notfound' }
			],
			{ scrollPositionRestoration: 'enabled' }
		)
	],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}
