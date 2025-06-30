import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contador',
  imports: [CommonModule, FormsModule],
  templateUrl: './contador.html',
  styleUrl: './contador.css'
})
export class Contador {
  nome: string = 'Emerson';
  valor: number = 3;

  incrementar() {
    this.valor++;
  }

  decrementar() {
    this.valor--;
  }
}
