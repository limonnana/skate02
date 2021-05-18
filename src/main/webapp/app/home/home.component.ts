import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { HttpResponse } from '@angular/common/http';
import { LoginModalService } from 'app/core/login/login-modal.service';
import { AccountService } from 'app/core/auth/account.service';
import { Account } from 'app/core/user/account.model';
import { HomeService } from './home.service';
import { IEvent } from 'app/shared/model/event.model';
import { ISpot } from 'app/shared/model/spot.model';
import { IPhoto } from 'app/shared/model/photo.model';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { IPlayer } from 'app/shared/model/player.model';
import { ITrick } from 'app/shared/model/trick.model';
import { ISeccion } from 'app/shared/model/seccion.model';

@Component({
  selector: 'jhi-home',
  templateUrl: './home.component.html',
  styleUrls: ['home.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  account: Account | null = null;
  authSubscription?: Subscription;
  event?: IEvent | null;
  spot: ISpot | null = null;
  photos?: IPhoto[];
  players?: IPlayer[];
  tricks?: ITrick[];
  secciones?: ISeccion[];
  base64textString?: string;
  photoBig1?: SafeResourceUrl;
  isPhotoBig1 = false;
  photoMedium2?: SafeResourceUrl;
  isPhotoMedium2 = false;
  photoMedium3?: SafeResourceUrl;
  isPhotoMedium3 = false;
  showText = false;

  constructor(
    private accountService: AccountService,
    private homeService: HomeService,
    private sanitizer: DomSanitizer,
    private loginModalService: LoginModalService
  ) {}

  ngOnInit(): void {
    this.getActiveEvent();
    this.authSubscription = this.accountService.getAuthenticationState().subscribe(account => (this.account = account));
  }

  isAuthenticated(): boolean {
    return this.accountService.isAuthenticated();
  }

  login(): void {
    this.loginModalService.open();
  }

  getActiveEvent(): void {
    this.homeService.getActiveEvent().subscribe((res: HttpResponse<IEvent>) => this.onSuccess(res));
  }

  protected onSuccess(res: HttpResponse<IEvent>): void {
    this.event = res.body;
    this.photos = this.event!.spot!.photos;
    this.players = this.event!.players;
    this.tricks = this.event!.tricks;
    // this.secciones = this.event!.tricks!;
    this.getPhotoSrc();
  }

  ngOnDestroy(): void {
    if (this.authSubscription) {
      this.authSubscription.unsubscribe();
    }
  }

  transform(src: string): SafeResourceUrl {
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
    return this.sanitizer.bypassSecurityTrustResourceUrl(src!);
  }

  getPhotoSrcFromArray(title: string): string | undefined {
    const photoFromArray = this.photos?.find(photo => photo.title === title);
    const src = photoFromArray?.image;
    return src;
  }

  getPhotoIdFromArray(title: string): string | undefined {
    const photoFromArray = this.photos?.find(photo => photo.title === title);
    const src = photoFromArray?.id;
    return src;
  }

  protected getPhotoSrc(): void {
    let photo1 = this.getPhotoSrcFromArray('photo_big_1');
    let photo2 = this.getPhotoSrcFromArray('photo_medium_2');
    let photo3 = this.getPhotoSrcFromArray('photo_medium_3');

    if (photo1 !== undefined) {
      this.isPhotoBig1 = true;
      photo1 = 'data:image/png;base64,' + photo1;
      this.photoBig1 = this.transform(photo1);
    }
    if (photo2 !== undefined) {
      this.isPhotoMedium2 = true;
      photo2 = 'data:image/png;base64,' + photo2;
      this.photoMedium2 = this.transform(photo2);
    }
    if (photo3 !== undefined) {
      this.isPhotoMedium3 = true;
      photo3 = 'data:image/png;base64,' + photo3;
      this.photoMedium3 = this.transform(photo3);
    }
  }
}
