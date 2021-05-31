import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SERVER_API_URL } from '../../app.constants';
import { ITrick } from '../../shared/model/trick.model';

type EntityResponseType = HttpResponse<ITrick>;
// type EntityArrayResponseType = HttpResponse<IPlayer[]>;

@Injectable({
  providedIn: 'root',
})
export class ContributorsService {
  public resourceUrl = SERVER_API_URL + 'api';

  constructor(protected http: HttpClient) {}

  find(id: string): Observable<EntityResponseType> {
    return this.http.get<ITrick>(`${this.resourceUrl}/trick/${id}`, { observe: 'response' });
  }
}
