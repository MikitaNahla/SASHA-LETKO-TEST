import { ThemeSwitcherService } from './../../services/theme-switcher.service';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-theme-switcher',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './theme-switcher.component.html',
  styleUrls: ['./theme-switcher.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThemeSwitcherComponent {
  constructor(private themeSwitcherService: ThemeSwitcherService) {}

  toggleTheme() {
    this.themeSwitcherService.toggleTheme();
  }
}
