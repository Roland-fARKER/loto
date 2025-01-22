import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cruzeta',
  templateUrl: './cruzeta.component.html',
  styleUrl: './cruzeta.component.css'
})
export class CruzetaComponent {
  @Input() primero: number = 0;
  @Input() segundo: number = 0;
  @Input() tercero: number = 0;

}
