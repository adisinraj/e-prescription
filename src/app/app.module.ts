import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrescribingsectionComponent } from './prescribingsection/prescribingsection.component';
import { DisplaysectionComponent } from './displaysection/displaysection.component';

@NgModule({
  declarations: [
    AppComponent,
    PrescribingsectionComponent,
    DisplaysectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
