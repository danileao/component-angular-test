import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {SelectComponent} from './select-component/select-component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {ClientSelectComponent} from './client-select/client-select.component';
import { HttpModule } from '@angular/http';
import {ExportUtils} from './gerar-excel/ExportUtils';
import {ClientExcelComponent} from './gerar-excel/client-excel.component';
import {ClientPdfComponent} from './gerar-pdf/client-pdf.component';
import {ExportPDFUtils} from './gerar-pdf/ExportPDFUtils';

@NgModule({
  declarations: [
    AppComponent,
    SelectComponent,
    ClientSelectComponent,
    ClientExcelComponent,
    ClientPdfComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [ExportUtils, ExportPDFUtils],
  bootstrap: [AppComponent]
})
export class AppModule { }
