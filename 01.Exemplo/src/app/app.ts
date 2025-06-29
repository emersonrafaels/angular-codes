import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `
    <h1>Welcome to {{title}}!</h1>
    <h2>Autor {{autor}}!</h2>

    <router-outlet />
  `,
  styles: [],
})
export class App {
  protected title = '01.Exemplo';
  protected autor = 'Emerson V. Rafael (emervin)';
}
