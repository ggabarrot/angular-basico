import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})

export class AgregarComponent {
  //@Input() nuevo: Personaje[] = [];
  //@Input() personajes: Personaje[] = [];
  
  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  constructor(private dbzService: DbzService ){}
  //el @Output sirve para emitir eventos (EventEmitter<T>) - especificar tipo
  // @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  agregar() {
    //debugger;
    if (this.nuevo.nombre.trim().length === 0) {
      return;
    }
    
    this.dbzService.agregarPersonaje(this.nuevo);
    //console.log(this.nuevo);
    // this.onNuevoPersonaje.emit(this.nuevo);
    
    this.nuevo = {nombre: '', poder: 0};
    
  }
}
