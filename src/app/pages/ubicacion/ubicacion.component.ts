import { Component, OnInit } from '@angular/core';
import { Ubicacion } from 'src/app/demo/domain/Ubicacion';
import { UbicacionService } from '../../demo/service/ubicacion.service';

@Component({
  selector: 'app-ubicacion',
  templateUrl: './ubicacion.component.html',
  styleUrls: ['./ubicacion.component.scss'],
})
export class UbicacionComponent implements OnInit {
  constructor(private locationService: UbicacionService) {}

  location: Ubicacion[];

  selectedColumns: any;

  cols: any[];

  ngOnInit(): void {
    this.ubicacionPersonajes();

    this.cols = [
      { field: 'name', header: 'name' },
      { field: 'dimension', header: 'dimension' },
      // { field: 'created', header: 'created' },
      { field: 'type', header: 'type' },
      { field: 'id', header: 'id' },
    ];

    this.selectedColumns = this.cols;
  }

  ubicacionPersonajes() {
    this.locationService.getPersonaje().subscribe(locat => {
      console.log(locat);
      this.location = locat.results;
    });
  }
}
