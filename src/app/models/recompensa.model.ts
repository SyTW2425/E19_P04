export class Recompensa {
    id: string;
    nombre: string;
    descripcion: string;
    puntos: number;
  
    constructor(id: string, nombre: string, descripcion: string, puntos: number) {
      this.id = id;
      this.nombre = nombre;
      this.descripcion = descripcion;
      this.puntos = puntos;
    }
  }
  