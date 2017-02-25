import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { PetsComponent } from './pets.component';
import { ThelistComponent } from './thelist.component';
import { PetFormComponent } from './pet-form.component';
import { FosterRequestDirective } from './foster-request.directive';
import { PetService } from './pet.service';
@NgModule({
  declarations: [
    AppComponent,
    PetsComponent,
    ThelistComponent,
    PetFormComponent,
    FosterRequestDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [PetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
