import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayersComponent } from './players/players.component';
import { RouterModule } from '@angular/router';
import { PLAYERS_ROUTE } from './player.route';
import { SkaterComponent } from './skater/skater.component';

@NgModule({
  declarations: [PlayersComponent, SkaterComponent],
  imports: [CommonModule, RouterModule.forChild(PLAYERS_ROUTE)],
})
export class PlayerModule {}
