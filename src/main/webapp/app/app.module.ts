import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import './vendor';
import { Skate02SharedModule } from 'app/shared/shared.module';
import { Skate02CoreModule } from 'app/core/core.module';
import { Skate02AppRoutingModule } from './app-routing.module';
import { Skate02HomeModule } from './home/home.module';
import { TipModule } from './tip/tip.module';
import { Skate02EntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ActiveMenuDirective } from './layouts/navbar/active-menu.directive';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    Skate02SharedModule,
    Skate02CoreModule,
    Skate02HomeModule,
    TipModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    Skate02EntityModule,
    Skate02AppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, ActiveMenuDirective, FooterComponent],
  bootstrap: [MainComponent],
})
export class Skate02AppModule {}
