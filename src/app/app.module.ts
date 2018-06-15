import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {ROUTES} from "./app.routes";
import { DetailComponent } from './detail/detail.component';
import { IdentifiantResolver } from './services/IdentifiantResolver';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    IdentifiantResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
