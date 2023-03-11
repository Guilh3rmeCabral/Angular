import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  userName = 'Joaquim';
  userAge = 21;
  userHobbies = {
    esporte: 'Ciclista',
    instrumento: 'Violinista'
  };


  title = 'angular-course';
}
