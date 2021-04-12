import { Route } from '@angular/router';

import { TipComponent } from './tip.component';

export const TIP_ROUTE: Route = {
  path: 'tip/:id',
  component: TipComponent,
  data: {
    authorities: [],
    pageTitle: 'global.title',
  },
};
