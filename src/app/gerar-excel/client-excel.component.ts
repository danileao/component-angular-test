import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ExportUtils} from './ExportUtils';
import {ExcelModel} from './excelModel';

@Component({
  selector: 'app-client-excel',
  templateUrl: './client-excel.component.html',
})
export class ClientExcelComponent implements OnInit {
  @ViewChild('tbl') el: ElementRef;

  private titulos: any[] = ['ID', 'Item'];
  private colunas: any[] = ['id', 'item'];
  private itens: ExcelModel[] = [];


  ngOnInit(): void {

  }


  exportarExcel() {

    this.itens.push({id: 1, item: 'Teste 1'});
    this.itens.push({id: 2, item: 'Teste 2'});
    this.itens.push({id: 3, item: 'Teste 3'});

    this.exportXls(this.titulos, this.colunas, this.itens);
  }

  public exportXls(titulos: any[], colunas: any[], itens: any[]) {
    let colspan = 6;
    let header = `
            <table>
                <tr><th colspan="8"><h2>Nome</h2></th></tr>
                <tr><th colspan="8"><h2>Texto</h2></th></tr>
            </table>`;


    let footer = `
            <table>
                <tr><td></td></tr>
                <tr><th colspan='${colspan}'>Teste</th></tr>
            </table>`;

    let contentLines: string[] = [];
    let titulosLine = '<tr>' + titulos.map(titulo => `<th>${titulo}</th>`).join('') + '</tr>';

    contentLines.push('<table>');
    contentLines.push(titulosLine);
    for (let e of itens) {


      contentLines.push('<tr>');
      for (let c of colunas) {
        let descricao = e[c];
        contentLines.push(`<td>${ (descricao) ? descricao : '' }</td>`);
      }
      contentLines.push('</tr>');
    }
    contentLines.push('</table>');

    let exportUtils = new ExportUtils();
    exportUtils.exportXls(contentLines.join(''), header, footer);
  }

}
