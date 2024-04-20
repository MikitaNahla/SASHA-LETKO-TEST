import { ThemeSwitcherService } from './../../core/services/theme-switcher.service';
import { ChangeDetectionStrategy, Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  constructor(
    private el: ElementRef,
    private themeSwitcherService: ThemeSwitcherService
  ) {}

  get fromGradient() {
    return this.themeSwitcherService.currentThemeData['fromGradient'];
  }

  get toGradient() {
    return this.themeSwitcherService.currentThemeData['toGradient'];
  }
}
