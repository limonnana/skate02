import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as moment from 'moment';
import { IEvent } from '../shared/model/event.model';
import { SERVER_API_URL } from '../app.constants';

type EntityResponseType = HttpResponse<IEvent>;
type EntityArrayResponseType = HttpResponse<IEvent[]>;

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  public resourceUrl = SERVER_API_URL + 'api';
  public resourceUrlHome = SERVER_API_URL + 'api';

  constructor(protected http: HttpClient) {}

  getActiveEvent(): Observable<EntityResponseType> {
    return this.http
      .get<IEvent>(`${this.resourceUrl}/event/active`, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }

  protected convertDateFromServer(res: EntityResponseType): EntityResponseType {
    if (res.body) {
      res.body.day = res.body.day ? moment(res.body.day) : undefined;
    }
    return res;
  }
}
