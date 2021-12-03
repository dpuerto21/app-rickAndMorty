import { Component, OnInit } from '@angular/core';

import { BreadcrumbService } from '../../app.breadcrumb.service';
import { PersonajesService } from '../service/personajes.service';
import { Personaje, ApiResultPersonajes, Personajes } from '../domain/personajes.interfaces';

import { EpisodiosService } from '../service/episodios.service';
import { Episode} from '../domain/Episodios';

@Component({
    templateUrl: './tabledemo.component.html',

    styleUrls: ['./tabledemo.scss'],
    styles: [
        `
        :host ::ng-deep .p-datatable-gridlines p-progressBar {
            width: 100%;
        }

        @media screen and (max-width: 960px) {
            :host ::ng-deep .p-datatable.p-datatable-customers.rowexpand-table .p-datatable-tbody > tr > td:nth-child(6) {
                display: flex;
            }
        }

    `
    ]
})
export class TableDemoComponent implements OnInit {


    page = 1;

    cols: any[];

    select: Personaje[] = []

    datasource: ApiResultPersonajes;

    personajes: Personaje[];

    prof : Personaje[]

    selectedColums: any[];

    Episodes: Episode[];

    idS: number[];

    proof2:any[] = []

    Filtrado : any[]


    constructor(
        private breadcrumbService: BreadcrumbService,
        private personajesService: PersonajesService,
        // private episodeService: EpisodiosService
    ) {
        this.breadcrumbService.setItems([{ label: ' Rick and Morty' }]);
    }

    ngOnInit() {
        this.cols = [
            { header: 'name',field: 'name' },
        ];
        this.selectedColums = this.cols;
        // this.episodeResults()
    }


    getData(page: number) {
        console.log(page);

        this.personajesService.getPersonajes(page).subscribe((res) => {
            console.log(res);
            this.datasource = res;
            this.personajes = res.results;
            const fil = this.personajes.filter((element) => element.episode)
            this.Filtrado = fil
            console.log(fil);

            // this.prof = res.results;
            // const newPersonaje = []
            // for (const personaje of this.personajes) {
            //     personaje['episode'] = this.proof2
            //     newPersonaje.push(personaje)
            // }

        });
    }

    // episodeResults() {
    //     this.episodeService.getepisodeId().subscribe((e) => {
    //         console.log(e);

    //         this.Episodes = e.results


    //         const IDS = this.Episodes.filter((fil => fil.id === 1))
    //         console.log(IDS);
    //     //    this.proof2.push(IDS)

    //     // console.log(this.proof2);

    //     });
    // }


    loadPersonajes(event) {
        console.log(event);
        const { first,rows } = event;
        const page = first / rows + 1;
        this.getData(page);
    }


}
