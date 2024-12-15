import { Tarea } from './tarea.model';
import { Habito } from './habito.model';
import { Recompensa } from './recompensa.model';
import { Estadistica } from './estadistica.model';

export class Usuario {
  id: string;
  nombre: string;
  correo: string;
  contrasena: string;
  puntos: number;
  tareas: Tarea[];
  habitos: Habito[];
  recompensas: Recompensa[];
  estadistica: Estadistica;

  constructor(
    id: string,
    nombre: string,
    correo: string,
    contrasena: string,
    puntos: number = 0,
    tareas: Tarea[] = [],
    habitos: Habito[] = [],
    recompensas: Recompensa[] = [],
    estadistica: Estadistica
  ) {
    this.id = id;
    this.nombre = nombre;
    this.correo = correo;
    this.contrasena = contrasena;
    this.puntos = puntos;
    this.tareas = tareas;
    this.habitos = habitos;
    this.recompensas = recompensas;
    this.estadistica = estadistica;
  }
}
