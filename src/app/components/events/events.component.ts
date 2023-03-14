import { Component } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent {
  show: boolean = false;

  showMessage(): void {
    //Só vai tipificar o método void se ele não retornar nada.
    this.show = !this.show; // A mesma coisa que trocar o valor de false para true. toggle
  }
}
