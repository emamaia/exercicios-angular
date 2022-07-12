import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-databi-exercicio',
  templateUrl: './databi-exercicio.component.html',
  styleUrls: ['./databi-exercicio.component.scss']
})
export class DatabiExercicioComponent implements OnInit {

  @Input() palavra: string;

  imageURL = 'https://bapinkfire-savein.cdn.jelastic.net/wp-content/uploads/2022/05/As-50-melhores-fotos-de-gatos-fofos-para-derreter-seu-coracao-1-1024x387.webp';

  constructor() { }

  ngOnInit(): void {
  }

}