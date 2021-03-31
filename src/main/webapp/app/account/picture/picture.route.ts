import { Route } from '@angular/router';
import { Authority } from 'app/shared/constants/authority.constants';
import { PictureComponent } from './picture.component';
import { UserRouteAccessService } from 'app/core/auth/user-route-access-service';

export const pictureRoute: Route = {
  path: 'picture/:login',
  component: PictureComponent,
  data: {
    authorities: [Authority.USER],
    pageTitle: 'picture.title',
  },
  canActivate: [UserRouteAccessService],
};
