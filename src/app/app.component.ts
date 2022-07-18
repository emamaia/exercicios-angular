import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  outraPalavra = 'Pudim';
  titulo = 'Minha gata mudou o título';
  contadorInicial = 10;

  constructor() {  }

eventoRecebido($event){
  console.log('EVENTO RECEBIDO');
}

addValor($event){
  console.log('Add valor aqui');
  this.contadorInicial = this.contadorInicial + 10;
}

diminuiValor($event){
  console.log('Diminui valor aqui');
  this.contadorInicial = this.contadorInicial - 10;
}

}
