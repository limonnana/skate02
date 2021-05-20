import { IUser } from '../../core/user/user.model';

export interface IPlayer {
  id?: string;
  user?: IUser | null;
}

export class Player implements IPlayer {
  constructor(public id?: string, public user?: IUser) {}
}
