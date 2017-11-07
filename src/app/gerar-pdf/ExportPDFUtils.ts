
import {Injectable} from '@angular/core';

@Injectable()
export class ExportPDFUtils {

  public  exportPdf(docDefinition: any) {
    const pdfMake = window['pdfMake'];

    pdfMake.createPdf(docDefinition).open();
  }

}
