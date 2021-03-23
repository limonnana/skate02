import { Moment } from 'moment';
import { ITrick } from './trick.model';
import { IPlayer } from './player.model';
import { ISpot } from './spot.model';
import { IPhoto } from './photo.model';

export interface IEvent {
  id?: string;
  day?: Moment;
  dayString?: string;
  name?: string;
  tricks?: ITrick[];
  players?: IPlayer[];
  photos?: IPhoto[];
  spot?: ISpot;
  active?: boolean;
}

export class Event implements IEvent {
  constructor(
    public id?: string,
    public day?: Moment,
    public dayString?: string,
    public name?: string,
    public tricks?: ITrick[],
    public players?: IPlayer[],
    public photos?: IPhoto[],
    public spot?: ISpot,
    public active?: boolean
  ) {}
}
