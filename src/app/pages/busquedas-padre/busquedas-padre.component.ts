import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject, Subscription } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';
import { Personaje } from 'src/app/demo/domain/personajes.interfaces';
import { PersonajesService } from 'src/app/demo/service/personajes.service';

@Component({
  selector: 'app-busquedas-padre',
  templateUrl: './busquedas-padre.component.html',
  styles: [],
})
export class BusquedasPadreComponent implements OnInit { // OnDestroy
  constructor(private personajesService: PersonajesService) {}

  // personajes: Observable<Personaje[]>;
  personajes: Personaje[];


  ngOnInit(): void {
    // this.busquedas();
  }

  queryPersonaje(busqueda: string) {
    this.personajesService
      .getBusqueda(busqueda, 2)
      .pipe(take(1))
      .subscribe(res => {
        console.log(res);
        this.personajes = res.results;
      });
  }

  // ngOnDestroy() {
  //   // this.subscription.unsubscribe();
  //   console.log('Subscription finalizada');
  // }
}
