export class Habito {
    id: string;
    titulo: string;
    descripcion: string;
    frecuencia: string; // Ejemplo: "diario", "semanal"
    completado: boolean;
    fecha: Date;
  
    constructor(
      id: string,
      titulo: string,
      descripcion: string,
      frecuencia: string,
      completado: boolean,
      fecha: Date
    ) {
      this.id = id;
      this.titulo = titulo;
      this.descripcion = descripcion;
      this.frecuencia = frecuencia;
      this.completado = completado;
      this.fecha = fecha;
    }
  }