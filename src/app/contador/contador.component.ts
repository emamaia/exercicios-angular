import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.scss']
})
export class ContadorComponent implements OnInit {

 @Input() contadorInicialFilho: any;
 @Output() addContador = new EventEmitter();
 @Output() removeContador = new EventEmitter();

 constructor() { }

  ngOnInit(): void {
  }

  adicionaUm($event){
    console.log('add um');
    this.addContador.emit($event);
  }

  subtraiUm($event){
    console.log('diminui um');
    this.removeContador.emit($event);
  }

}
