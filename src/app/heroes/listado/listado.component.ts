import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {
  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Capitan America'];
  heroeBorrado: string = '';

  borrarHeroe(){
    //borra el primero y lo retorna (se puede asignar a una variable para conocer el borrado)
    //this.heroeBorrado = this.heroes.shift();
    
    //borra el ultimo y lo retorna (se puede asignar a una variable para conocer el borrado)
    //dado que el .pop() puede ser undefined, se pone || '', para que devuelva string vacío
    this.heroeBorrado = this.heroes.pop() || '';
  }
}
