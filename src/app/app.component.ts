import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  outraPalavra = 'Pudim';
  titulo = 'Minha gata mudou o título';

  constructor() {

  }

}
