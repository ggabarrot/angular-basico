import { Component } from '@angular/core';


@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})
export class HeroeComponent {
    nombre: string = 'Ironman';
    edad: number = 48;

    
    get nombreCapitalizado(): string{
        return this.nombre.toUpperCase();
    }
    

    obtenerNombre(): string{
        return `El nombre es: ${this.nombre}, y su edad: ${this.edad}.`;
    }

    cambiarNombre(): void{
        this.nombre = 'Spiderman';
    }

    cambiarEdad(): void{
        this.edad = 40;
    }
}