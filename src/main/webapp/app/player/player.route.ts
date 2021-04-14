import { Routes } from '@angular/router';
import { SkaterComponent } from './skater/skater.component';
import { PlayersComponent } from '../player/players/players.component';

export const PLAYERS_ROUTE: Routes = [
  {
    path: 'players',
    component: PlayersComponent,
    data: {
      authorities: [],
      pageTitle: 'global.title',
    },
  },
  {
    path: 'skater/:id',
    component: SkaterComponent,
    data: {
      authorities: [],
      pageTitle: 'global.title',
    },
  },
];
