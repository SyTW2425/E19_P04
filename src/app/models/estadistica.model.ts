export class Estadistica {
    id: string;
    tareasCompletadas: number;
    habitosCompletados: number;
    puntajeTotal: number;
    fecha: Date;
  
    constructor(
      id: string,
      tareasCompletadas: number,
      habitosCompletados: number,
      puntajeTotal: number,
      fecha: Date
    ) {
      this.id = id;
      this.tareasCompletadas = tareasCompletadas;
      this.habitosCompletados = habitosCompletados;
      this.puntajeTotal = puntajeTotal;
      this.fecha = fecha;
    }
  }