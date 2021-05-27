import { Route } from '@angular/router';
import { Authority } from '../../shared/constants/authority.constants';
import { ProfilePictureComponent } from './profile-picture.component';
import { UserRouteAccessService } from '../../core/auth/user-route-access-service';

export const profilePictureRoute: Route = {
  path: 'profilepicture/:login',
  component: ProfilePictureComponent,
  data: {
    authorities: [Authority.USER, Authority.ADMIN],
    pageTitle: 'picture.title',
  },
  canActivate: [UserRouteAccessService],
};
