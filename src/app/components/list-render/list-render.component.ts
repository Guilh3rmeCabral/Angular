import { Component } from '@angular/core';
import { Animal } from 'src/app/Animal';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.scss']
})
export class ListRenderComponent {
  animalDetails = '';

  animals: Animal[] = [
    {
      name: "Turca",
      type: "Dog",
      age: 4
    },
    {
      name: "Tom",
      type: "Cat",
      age: 5
    },
    {
      name: "Frida",
      type: "Dog",
      age: 6
    },
    {
      name: "Bob",
      type: "Horse",
      age: 7
    }
  ]

  showAge(animal: Animal): void {
    this.animalDetails = `O pet ${animal.name} tem ${animal.age} anos!`
  }
}
