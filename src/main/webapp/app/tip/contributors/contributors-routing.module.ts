import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContributorsComponent } from './contributors.component';

const routes: Routes = [
  {
    path: 'contributors/:id',
    component: ContributorsComponent,
    data: {
      authorities: [],
      pageTitle: 'global.title',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContributorsRoutingModule {}
