import { Component, OnInit } from '@angular/core';
import { PetService } from './pet.service';
@Component({
  selector: 'app-thelist',
  templateUrl: './thelist.component.html',
  styleUrls: ['./thelist.component.css']
})
export class ThelistComponent implements OnInit {
  viewform: boolean = false;
  pets: any;
  constructor(private petService: PetService) {

    this.pets = this.petService.get();
  }
  addItem() {
    this.viewform = true;
  }

  onSubmit(newpet) {
    this.petService.add(newpet)
  }


  ngOnInit() {
  }
}
