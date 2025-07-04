import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Contador } from './contador/contador';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Contador],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected title = '02.Binding_Event';
}
