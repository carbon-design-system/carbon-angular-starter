import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TopNavModule, SideNavModule, TreeViewModule, GlyphiconModule, ModalModule } from '@neutrino/neutrino';

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
    GlyphiconModule,
    HttpModule,
    ModalModule,
    SideNavModule,
    TopNavModule,
    TreeViewModule,
    RouterModule.forRoot(APP_ROUTES, { useHash: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
