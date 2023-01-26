import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {
  //@Input() nuevo: Personaje[] = [];
  @Input() personajes: Personaje[] = [];
  
  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  agregar() {
    console.log(this.nuevo);
    if (this.nuevo.nombre.trim().length === 0) {
      return;
    }
    else{
      this.personajes.push(this.nuevo);
      this.nuevo = {nombre: '', poder: 0};
    }
    
    console.log(this.personajes);
  }
}
