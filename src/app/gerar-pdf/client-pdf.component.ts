

import {Component} from '@angular/core';
import {ExcelModel} from '../gerar-excel/excelModel';
import {ExportPDFUtils} from './ExportPDFUtils';

@Component({
  selector: 'app-client-pdf',
  templateUrl: './client-pdf.component.html',
})
export class ClientPdfComponent {
  private titulos: any[] = ['ID', 'Item'];
  private colunas: any[] = ['id', 'item'];
  private itens: ExcelModel[] = [];

  public exportarPDF() {

      this.populaLista();


    const conteudoTabela: string[][] = this.itens.map(
      (po: any) => this.colunas.map((col: string) => po[col].toString())
    );

    const docDefinition = {
      header: {
        text: 'Texto',
        fontSize: 18,
        bold: true,
        margin: [15, 15]
      },
      content: [
        {
          text: `Posição do Estoque: Teste teste`,
          fontSize: 14,
          bold: true,
          margin: [0, 10, 0, 5]
        },
        {
          fontSize: 10,
          layout: 'lightHorizontalLines',
          table: {
            headerRows: 1,
            widths: ['*', ...new Array(this.titulos.length - 1).fill('auto')],
            body: [
              this.titulos,
              ...conteudoTabela
            ]
          }
        }
      ],
      footer: (currentPage: any, pageCount: any) => {
        return {
          columns: [
            {
              text: `Geração`,
              alignment: 'left',
              fontSize: 6,
              margin: [40, 10, 0, 10]
            },
            {
              text: `Página ${currentPage} de ${pageCount}`,
              alignment: 'right',
              fontSize: 6,
              margin: [0, 10, 30, 10]
            }
          ]

        };
      },
    };

    const exportUtils = new ExportPDFUtils();
    exportUtils.exportPdf(docDefinition);
  }

  public populaLista() {
    for (let i = 1; i < 1000; i++) {
      this.itens.push({id: i, item: `Teste${i}`});
    }
  }

}

