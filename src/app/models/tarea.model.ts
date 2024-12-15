export class Tarea {
    id: string;
    titulo: string;
    descripcion: string;
    fechaInicio: Date;
    fechaFin: Date;
    completada: boolean;
  
    constructor(
      id: string,
      titulo: string,
      descripcion: string,
      fechaInicio: Date,
      fechaFin: Date,
      completada: boolean
    ) {
      this.id = id;
      this.titulo = titulo;
      this.descripcion = descripcion;
      this.fechaInicio = fechaInicio;
      this.fechaFin = fechaFin;
      this.completada = completada;
    }
  }
  