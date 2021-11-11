import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { ChisteFormComponent } from './chiste/chiste-form/chiste-form.component';
import { ListaChisteComponent } from './chiste/lista-chiste/lista-chiste.component';
import { CardChisteComponent } from './chiste/card-chiste/card-chiste.component';
import { CleanPipe } from './pipes/clean.pipe';

@NgModule({
  declarations: [
    ChisteFormComponent,
    ListaChisteComponent,
    CardChisteComponent,
    CleanPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [ListaChisteComponent]
})
export class AppModule { }
