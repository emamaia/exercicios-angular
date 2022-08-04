import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.scss']
})
export class ContadorComponent implements OnInit {

@Input() valor = 0;
@Output() valorChange = new EventEmitter();

 constructor() { }

  ngOnInit(): void {
  }

  // ============= EXERCICIOS DE TWO WAY DATABASE================
  incrementar($event){
    this.valor = this.valor + 1;
    this.valorChange.emit(this.valor);
    console.log('Aumenta um');
  }

  decrementar($event){
    this.valor = this.valor - 1;
    this.valorChange.emit(this.valor);
    console.log('Diminui um');
  }

}
