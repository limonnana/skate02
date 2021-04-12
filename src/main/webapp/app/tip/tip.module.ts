import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TipComponent } from './tip.component';
import { RouterModule } from '@angular/router';

import { Skate02SharedModule } from '../shared/shared.module';
import { TIP_ROUTE } from './tip.route';

@NgModule({
  declarations: [TipComponent],
  imports: [CommonModule, Skate02SharedModule, RouterModule.forChild([TIP_ROUTE])],
})
export class TipModule {}
