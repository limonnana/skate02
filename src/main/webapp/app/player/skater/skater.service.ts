import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SERVER_API_URL } from '../../app.constants';
import { IPlayer } from '../../shared/model/player.model';

type EntityResponseType = HttpResponse<IPlayer>;
// type EntityArrayResponseType = HttpResponse<IPlayer[]>;

@Injectable({
  providedIn: 'root',
})
export class SkateService {
  public resourceUrl = SERVER_API_URL + 'api';

  constructor(protected http: HttpClient) {}

  find(id: string): Observable<EntityResponseType> {
    return this.http.get<IPlayer>(`${this.resourceUrl}/player/${id}`, { observe: 'response' });
  }
}
