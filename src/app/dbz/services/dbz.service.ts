import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";

@Injectable()
export class DbzService {

    private _personajes: Personaje[] = [
        {nombre: 'Goku', poder: 15000},
        {nombre: 'Vegeta', poder: 7500}
    ];

    get personajes(): Personaje[] {
        return [...this._personajes];//retorno una copia de la del arreglo de personajes
    }
    
    constructor() {}

    agregarPersonaje(nuevoPersonaje: Personaje) {
        this._personajes.push(nuevoPersonaje);
    }

    // borrarPersonaje() {
    //     this._personajes.pop();
    // }
}