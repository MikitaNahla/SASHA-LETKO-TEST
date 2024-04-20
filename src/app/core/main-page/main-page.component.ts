import { ImageService } from './../services/image.service';
import { ThemeSwitcherService } from './../services/theme-switcher.service';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoCard } from '../types/InfoCard';
import { InfoItemComponent } from './components/info-item/info-item.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [CommonModule, InfoItemComponent, RouterModule],
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainPageComponent {
  mainLogo$ = this.themeSwitcherService.mainLogo$;

  constructor(
    private themeSwitcherService: ThemeSwitcherService,
    public imageService: ImageService
  ) {}
}
