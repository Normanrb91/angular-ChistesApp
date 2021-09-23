import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChisteFormComponent } from './chiste/chiste-form/chiste-form.component';
import { ListaChisteComponent } from './chiste/lista-chiste/lista-chiste.component';
import { CardChisteComponent } from './chiste/card-chiste/card-chiste.component';

@NgModule({
  declarations: [
    AppComponent,
    ChisteFormComponent,
    ListaChisteComponent,
    CardChisteComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
