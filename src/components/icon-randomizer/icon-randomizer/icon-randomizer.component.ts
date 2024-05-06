import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {fas, IconDefinition} from "@fortawesome/free-solid-svg-icons";
import {NgIf} from "@angular/common";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'icon-randomizer',
  standalone: true,
  imports: [RouterOutlet, NgIf, FaIconComponent],
  templateUrl: './icon-randomizer.component.html',
  styleUrl: './icon-randomizer.component.css'
})
export class IconRandomizerComponent {
  constructor() {
    this._iconsPull = Object.values(fas)
    this.showRandomIcon()
  }

  get randomIcon(): IconDefinition | null {
    return this._randomIcon;
  }

  set randomIcon(value: IconDefinition | null) {
    this._randomIcon = value;
  }

  showRandomIcon() {
    let randomIndex = Math.floor(Math.random() * this._iconsPull.length)
    this.randomIcon = null;
    setTimeout(() => {
      this.randomIcon = this._iconsPull[randomIndex];
    }, 3000);
  }

  private _randomIcon: IconDefinition | null = null;
  private readonly _iconsPull : IconDefinition[] = [];
  protected readonly faSpinner = faSpinner;
}
