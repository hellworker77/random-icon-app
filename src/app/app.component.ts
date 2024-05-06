import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {IconRandomizerComponent} from "../components/icon-randomizer/icon-randomizer/icon-randomizer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, IconRandomizerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {}
