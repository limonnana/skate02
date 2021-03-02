import { Route } from '@angular/router';

import { PictureComponent } from './picture.component';

export const pictureRoute: Route = {
  path: 'picture/:login',
  component: PictureComponent,
  data: {
    authorities: [],
    pageTitle: 'picture.title',
  },
};
