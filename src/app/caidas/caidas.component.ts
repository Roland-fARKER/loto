import { Component } from '@angular/core';

@Component({
  selector: 'app-caidas',
  templateUrl: './caidas.component.html',
  styleUrl: './caidas.component.css',
})
export class CaidasComponent {
  numero?: number;
  caida: number[][] = [];

  generatePyramid(row: number[]) {
    while (row.length > 1) {
      const newRow: number[] = [];
      for (let i = 0; i < row.length - 1; i++) {
        const sum = row[i] + row[i + 1];
        newRow.push(sum % 10);
      }
      this.caida.push(newRow);
      row = newRow;
    }
  }

  splitNumberMath(num: number): number[] {
    if (num === null || num === undefined) {
      return [0, 0]; // Manejo de valor nulo o indefinido
    }

    const strNum = num.toString().padStart(2, '0'); // Asegura al menos 2 dígitos
    return strNum.slice(-2).split('').map(Number);
  }

  calculate() {
    if (this.numero === undefined || this.numero === null) {
      this.numero = 0; // Asignar 0 si no hay entrada
    }

    let initRow = this.splitNumberMath(this.numero);
    this.caida = [initRow];
    this.generatePyramid(initRow);
  }
}
