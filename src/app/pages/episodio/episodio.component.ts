import { Component, OnInit } from '@angular/core';
import { Episode } from 'src/app/demo/domain/Episodios';
import { EpisodiosService } from '../../demo/service/episodios.service';

@Component({
	selector: 'app-episodio',
	templateUrl: './episodio.component.html',
	styleUrls: [ './episodio.component.scss' ]
})
export class EpisodioComponent implements OnInit {

    id: number[] = [];

    resultEpisode: Episode[];

	constructor(private episodiosService: EpisodiosService) {}

    ngOnInit(): void {
        this.episodeResults()
    }

	episodeResults() {
        this.episodiosService.getepisode().subscribe((episoderesp) => {

            this.resultEpisode = episoderesp.results

            console.log(this.resultEpisode);
        });


	}
}
