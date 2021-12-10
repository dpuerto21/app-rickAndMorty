import { Component, Input, OnInit } from '@angular/core';
import { Personaje } from 'src/app/demo/domain/personajes.interfaces';

@Component({
  selector: 'app-result-entrega',
  templateUrl: './result-entrega.component.html',
  styles: [
  ]
})
export class ResultEntregaComponent implements OnInit {

  constructor() { }

 @Input() personajes : Personaje[]

  ngOnInit(): void {
    console.log(this.personajes);
    
  }

}
