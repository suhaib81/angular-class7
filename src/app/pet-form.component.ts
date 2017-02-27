import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-pet-form',
  templateUrl: './pet-form.component.html',
  styleUrls: ['./pet-form.component.css']
})
export class PetFormComponent implements OnInit {

  @Output() myEmitter = new EventEmitter;

  constructor() { }

  onSubmit(newpet) {

    this.myEmitter.emit(newpet);
  }
  ngOnInit() {
  }

}
