import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IUser } from 'app/core/user/user.model';
import { IPlayer } from 'app/shared/model/player.model';
import { SkateService } from './skater.service';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'jhi-skater',
  templateUrl: './skater.component.html',
  styleUrls: ['./skater.component.scss'],
})
export class SkaterComponent implements OnInit {
  id?: string | null = null;
  player: IPlayer | null = null;
  user?: IUser | null = null;

  constructor(protected activatedRoute: ActivatedRoute, protected skateService: SkateService) {}

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.skateService.find(this.id!).subscribe((res: HttpResponse<IPlayer>) => {
      this.player = res.body;
      this.user = this.player?.user;
    });
    // this.playerService.query().subscribe((res: HttpResponse<IPlayer[]>) => (this.players = res.body || []));
  }
}
