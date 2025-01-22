import { Component } from '@angular/core';

@Component({
  selector: 'app-caidas',
  templateUrl: './caidas.component.html',
  styleUrl: './caidas.component.css'
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
    const digits: number[] = [];
    while (num > 0) {
      digits.unshift(num % 10); // Extrae el último dígito
      num = Math.floor(num / 10); // Reduce el número
    }
    return digits;
  }

  calculate(){
    if(!this.numero) return

    let initRow = this.splitNumberMath(this.numero);

    this.caida = [initRow]
    this.generatePyramid(initRow)
    console.log(this.caida)
  }
}
