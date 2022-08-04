import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-databi-exercicio',
  templateUrl: './databi-exercicio.component.html',
  styleUrls: ['./databi-exercicio.component.scss']
})
export class DatabiExercicioComponent implements OnInit {

  @Input() palavra: string;
  @Input() color: string; /* Para receber infos */
  @Output() clicado = new EventEmitter(); /* Para enviar infos */


  valorInput = '';
  valorInputEmissor = '';

  valorContador = 10;

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    console.log('clicou');
  }


  // ======= EXEMPLOS DE DATA BINDING
  // digitouAlgo($event){
  //   this.valorInput = $event.target.value;
  //   console.log($event);
  // }

  // OnClickEmissor($event){
  //   console.log('Emitir infos para o componente pai');
  //   this.clicado.emit($event); /** emitindo o evento */
  // }
}
