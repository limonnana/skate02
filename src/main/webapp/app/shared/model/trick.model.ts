import { ISeccion } from './seccion.model';

export interface ITrick {
  id?: string;
  name?: string;
  objectiveAmount?: number;
  currentAmount?: number;
  secciones?: ISeccion[];
}

export class Trick implements ITrick {
  constructor(
    public id?: string,
    public name?: string,
    public objectiveAmount?: number,
    public currentAmount?: number,
    public secciones?: ISeccion[]
  ) {}
}
