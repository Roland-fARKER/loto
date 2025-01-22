import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { es } from './utilities/locale.calendar.conf';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  pyramid: number[][] = [];
  selectedDate: Date = new Date();

  constructor(private primengConfig: PrimeNGConfig) {}

  ngOnInit() {
    this.primengConfig.setTranslation(es);
    this.onDateChange();
  }

  onDateChange() {
    const day = this.selectedDate.getDate().toString().padStart(2, '0');
    const month = (this.selectedDate.getMonth() + 1).toString().padStart(2, '0');
    const year = this.selectedDate.getFullYear().toString();

    const initialRow = (day + month + year).split('').map(Number);
    this.pyramid = [initialRow];
    this.generatePyramid(initialRow);
    console.log( this.pyramid[7])
  }

  generatePyramid(row: number[]) {
    while (row.length > 1) {
      const newRow: number[] = [];
      for (let i = 0; i < row.length - 1; i++) {
        const sum = row[i] + row[i + 1];
        newRow.push(sum % 10);
      }
      this.pyramid.push(newRow);
      row = newRow;
    }
  }

  changeDate(days: number) {
    const newDate = new Date(this.selectedDate);
    newDate.setDate(newDate.getDate() + days);
    this.selectedDate = newDate;
    this.onDateChange(); // Llamar la función para actualizar la pirámide
  }
}
