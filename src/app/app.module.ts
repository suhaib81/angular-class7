import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { PetsComponent } from './pets.component';
import { ThelistComponent } from './thelist.component';
import { PetFormComponent } from './pet-form.component';

@NgModule({
  declarations: [
    AppComponent,
    PetsComponent,
    ThelistComponent,
    PetFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
