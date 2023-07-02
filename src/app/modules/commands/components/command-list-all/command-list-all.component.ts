import { Component } from '@angular/core';

declare let DataTable: any;
@Component({
  selector: 'app-command-list-all',
  templateUrl: './command-list-all.component.html',
  styleUrls: ['./command-list-all.component.scss'],
})
export class CommandListAllComponent {
  ngAfterViewInit() {
    setTimeout(() => {
      new DataTable('#myCommands');
    }, 200);
  }
}