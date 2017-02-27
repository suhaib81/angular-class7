import { Component, OnInit, Input } from '@angular/core';
import { PetService } from './pet.service';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css']
})
export class PetsComponent implements OnInit {
  @Input() pet;

  constructor(private petService: PetService) { }


  deleteItem(pet) {
    this.petService.delete(pet);
  }
  updateItem() {
    alert('coming soon ...')
  }

  ngOnInit() {
  }

}
