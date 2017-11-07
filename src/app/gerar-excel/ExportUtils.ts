import {Injectable} from '@angular/core';

@Injectable()
export class ExportUtils {

  public  exportXls(payload: string, title: string = '', footer: string = '') {

    let envelope = `
            <html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40">
                <meta http-equiv="content-type" content="application/vnd.ms-excel; charset=UTF-8">
                <head></head>
                <body>
                    ${ title }
                    ${ payload }
                    ${ footer }
                </body>
            </html>`;

    let href = `data:application/vnd.ms-excel;charset=UTF-8,${encodeURIComponent(envelope)}`;
    let downloadName = `export_${new Date().getTime()}.xls`;

    let tagA: HTMLAnchorElement = document.createElement('a');
    tagA.href = href;
    tagA.download = downloadName;
    tagA.click();
  }
}
