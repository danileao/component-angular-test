import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-cliente',
  templateUrl: './client-select.component.html'
})
export class ClientSelectComponent implements  OnInit{
  ngOnInit(): void {
  }



  public chamaEvento(event: any) {
    console.log('chamou');
    console.log(event);
  }


}
