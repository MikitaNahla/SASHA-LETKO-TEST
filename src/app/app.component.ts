import { ImageService } from './core/services/image.service';
import { Component, OnInit } from '@angular/core';
import { ThemeSwitcherService } from './core/services/theme-switcher.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'interface';
  constructor(
    private themeSwitcherService: ThemeSwitcherService,
    private imageService: ImageService
  ) {}

  ngOnInit(): void {
    this.themeSwitcherService.setLightTheme();
  }

  public toogleTheme() {
    this.themeSwitcherService.setLightTheme();
  }

  get logo() {
    return this.imageService.getImage(this.themeSwitcherService.logo, 'png');
  }
}
