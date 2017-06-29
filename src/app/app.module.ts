import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import {
  TopNavModule,
  SideNavModule,
  TreeViewModule,
  IconModule,
  IconService,
  ModalModule
} from '@peretz/neutrino';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { APP_ROUTES } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    IconModule,
    HttpModule,
    ModalModule,
    SideNavModule,
    TopNavModule,
    TreeViewModule,
    RouterModule.forRoot(APP_ROUTES, { useHash: true }),
    TranslateModule.forRoot()
  ],
  providers: [IconService],
  bootstrap: [AppComponent]
})
export class AppModule { }
