import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Componente03Component } from './componente03/componente03.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Componente03Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'treinoangula';
}
