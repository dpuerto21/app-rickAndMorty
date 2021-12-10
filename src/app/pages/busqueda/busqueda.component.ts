import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter, tap } from 'rxjs/operators';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [],
})
export class BusquedaComponent implements OnInit {
  
  @Output() queryBusq = new EventEmitter<string>();
  
  
    busquedaInput : FormGroup = this.fb.group({
      busqueda: [ , [Validators.required , Validators.minLength(4) ]   ]
    });
  constructor( private fb : FormBuilder) {}

  ngOnInit(): void {
    this.busquedaInput.valueChanges
      .pipe(  
        debounceTime(300),
        distinctUntilChanged(),
        // filter(q => q.length >= 3)
      )
      .subscribe(query => {
        this.queryBusq.emit(query);
      });
  }
  campoValido(campo : string){
     return this.busquedaInput.controls[campo].touched 
     && this.busquedaInput.controls[campo].errors
  }
}
