import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContributorsRoutingModule } from './contributors-routing.module';
import { ContributorsComponent } from './contributors.component';

@NgModule({
  declarations: [ContributorsComponent],
  imports: [CommonModule, ContributorsRoutingModule],
})
export class ContributorsModule {}
