import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-parent-data',
  templateUrl: './parent-data.component.html',
  styleUrls: ['./parent-data.component.scss']
})
export class ParentDataComponent {
  @Input() userName: string = '';
  @Input() userAge!: number;
  @Input() userHobbies!: {esporte: string; instrumento: string}; 
  // Sinal de ! significa que estou garatindo que esse dado vai ser iniciado;
}