import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css']
})
export class PetsComponent implements OnInit {
  @Input() pet;
  deleted: boolean = true;

  constructor() { }


  deleteItem() {
    this.deleted = false;
  }
  updateItem() {
    alert('coming soon ...')
  }

  ngOnInit() {
  }

}
