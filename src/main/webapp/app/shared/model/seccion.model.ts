import { IUser } from '../../core/user/user.model';
import { IStyleCss } from './styleCss.model';

export interface ISeccion {
  id?: string;
  user?: IUser;
  porcentaje?: number;
  shekel?: number;
}

export class Seccion implements ISeccion {
  constructor(public id?: string, public user?: IUser, public porcentaje?: number, public shekel?: number) {}
}
