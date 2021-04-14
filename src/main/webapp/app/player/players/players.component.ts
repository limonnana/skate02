import { Component, OnInit } from '@angular/core';
import { HomeService } from 'app/home/home.service';
import { IEvent } from 'app/shared/model/event.model';
import { IPlayer } from 'app/shared/model/player.model';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'jhi-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss'],
})
export class PlayersComponent implements OnInit {
  players?: IPlayer[];
  event?: IEvent | null;

  constructor(private homeService: HomeService) {}

  ngOnInit(): void {
    this.getActiveEvent();
  }

  getActiveEvent(): void {
    this.homeService.getActiveEvent().subscribe((res: HttpResponse<IEvent>) => this.onSuccess(res));
  }

  protected onSuccess(res: HttpResponse<IEvent>): void {
    this.event = res.body;
    this.players = this.event!.players;
  }
}
