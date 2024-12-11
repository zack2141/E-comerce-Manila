import { Component } from '@angular/core';
import { PDiaComponent } from './p-dia/p-dia.component';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [PDiaComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

}
