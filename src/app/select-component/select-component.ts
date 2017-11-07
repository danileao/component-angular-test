
import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MesModel} from '../model/mes.model';

@Component({
  selector: 'app-select',
  templateUrl: './select-component.html',
})
export class SelectComponent implements OnInit{

  private mes: MesModel[] = [];

  @Output() valorMes = new EventEmitter();
  private resultadoMes: MesModel = new MesModel();

  ngOnInit(): void {
    this.mes.push({id: 1, nome: 'Janeiro'});
    this.mes.push({id: 2, nome: 'Fevereiro'});
    this.mes.push({id: 3, nome: 'Março'});
    this.mes.push({id: 4, nome: 'Abril'});
  }

  alter(ret: number) {
    let mesRetorno = this.mes.filter(r => r.id == ret)[0];
    console.info(mesRetorno);
    this.valorMes.emit(mesRetorno);
  }

}
