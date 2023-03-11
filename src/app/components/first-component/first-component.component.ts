import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.scss']
})
export class FirstComponentComponent {
  name: string = "Guilherme";
  age: number = 21;
  job: string = "Development";
  hobbies = {
    esporte: 'Gyn',
    instrumento: 'Baterista',
  }
}
