import { Component } from '@angular/core';
import { DATATABLE_LANGAGE_FR } from 'src/app/data/interfaces';

declare let DataTable: any;
@Component({
  selector: 'app-command-list-all',
  templateUrl: './command-list-all.component.html',
  styleUrls: ['./command-list-all.component.scss'],
})
export class CommandListAllComponent {
  constructor(){
    setTimeout(() => {
      new DataTable('#myCommands', DATATABLE_LANGAGE_FR);
    }, 1);
  }
}