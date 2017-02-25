import { Injectable } from '@angular/core';

@Injectable()
export class PetService {
pets: any;
  constructor() {
     this.pets = [
      { 'name': 'Cat', 'Breed': 'Maine Coon', 'age': 3, 'img': 'https://pbs.twimg.com/profile_images/649763969381433345/1Xy68VwR.jpg' },
      { 'name': 'Dog', 'Breed': 'Boxer', 'age': 5, 'img': 'http://static.wixstatic.com/media/b00526_bea132eeb3644fc8ae5c966191dfeb98.png_256' },
      { 'name': 'Bird', 'Breed': 'parrot', 'age': 2, 'img': 'https://static-s.aa-cdn.net/img/ios/916162289/45f0b6380267980d7582392c4024f0f1?v=1' },
      { 'name': 'Horse', 'Breed': 'Arabian', 'age': 10, 'img': 'https://d2ud6pzmcqokoo.cloudfront.net/2/3/32530/arabian_full.png' }
    ];
   }


   get(){
     return this.pets;
   }

   add(pet){
     return this.pets.push(pet);
   }

   delete(pet){
    let index = this.pets.indexOf(pet);
    if (index >=0){
      this.pets.splice(index,1);
    }
   }

}
