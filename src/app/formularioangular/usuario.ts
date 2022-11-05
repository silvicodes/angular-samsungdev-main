export class Usuario {
  nombre: string;
  apellidos: string;
  edad: number;
  dni: number;
  cumple: Date;
  colorfav: string;
  genero: string;

  constructor(){

    this.nombre = "";
    this.apellidos = "";
    this.edad = 0;
    this.dni = 0;
    this.cumple = new Date();
    this.colorfav = "";
    this.genero = "";
  }
}
