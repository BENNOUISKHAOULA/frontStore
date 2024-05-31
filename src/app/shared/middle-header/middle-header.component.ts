import { Component } from '@angular/core';

@Component({
  selector: 'app-middle-header',
  templateUrl: './middle-header.component.html',
  styleUrls: ['./middle-header.component.scss']
})
export class MiddleHeaderComponent {
  idClient: number = Number(localStorage.getItem('idClient'));
}
