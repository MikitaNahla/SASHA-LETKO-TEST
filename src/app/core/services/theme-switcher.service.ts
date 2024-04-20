import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { IThemeRgbColor, ThemeColorType } from '../types/ThemeColorType';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeSwitcherService {
  currentTheme: 'dark' | 'light' = 'light';

  lightTheme: Record<string, IThemeRgbColor> = {
    primary: {
      r: 230,
      g: 118,
      b: 39,
    },
    secondary: {
      r: 255,
      g: 255,
      b: 255,
    },
    fromGradient: {
      r: 254,
      g: 144,
      b: 65,
    },
    toGradient: {
      r: 232,
      g: 122,
      b: 42,
    },
    background: {
      r: 255,
      g: 255,
      b: 255,
    },
  };

  darkTheme: Record<string, IThemeRgbColor> = {
    primary: {
      r: 81,
      g: 101,
      b: 121,
    },
    secondary: {
      r: 245,
      g: 245,
      b: 245,
    },
    fromGradient: {
      r: 90,
      g: 114,
      b: 139,
    },
    toGradient: {
      r: 54,
      g: 70,
      b: 87,
    },
    background: {
      r: 55,
      g: 59,
      b: 62,
    },
  };

  images: Record<string, string> = {
    logo: 'logo',
    mainLogo: 'mainLogo',
  };

  currentThemeSubject$: BehaviorSubject<Record<string, IThemeRgbColor>> =
    new BehaviorSubject(this.lightTheme);

  mainLogoSubject$: BehaviorSubject<string> = new BehaviorSubject(
    this.images['mainLogo']
  );

  private readonly documentElement: HTMLElement;

  constructor(@Inject(DOCUMENT) { documentElement }: Document) {
    this.documentElement = documentElement;
  }

  /** Gets color value from CSS variable */
  public get(colorType: ThemeColorType): IThemeRgbColor | null {
    const cssColor = this.getFromCssVariable(colorType);

    if (cssColor) {
      return this.parseCssColor(cssColor);
    }

    return null;
  }

  /** Sets color value into CSS variable. All components immediately change their color */
  public apply(colorType: ThemeColorType, color: IThemeRgbColor): void {
    const { r, g, b } = color;
    const cssVariableName = this.getColorTypeCssVariableName(colorType);

    this.documentElement.style.setProperty(cssVariableName, `${r}, ${g}, ${b}`);
  }

  private getFromCssVariable(colorType: ThemeColorType): string {
    const cssVariableName = this.getColorTypeCssVariableName(colorType);

    return this.documentElement.style.getPropertyValue(cssVariableName);
  }

  private getColorTypeCssVariableName(colorType: ThemeColorType): string {
    return `--os-${colorType}-color`;
  }

  private parseCssColor(cssColor: string): IThemeRgbColor {
    const [r, g, b] = cssColor
      .split(',')
      .map((colorPart) => +colorPart.replace(/^\D+/g, ''));

    return { r, g, b };
  }

  setLightTheme() {
    this.currentTheme = 'light';
    this.currentThemeSubject$.next(this.lightTheme);
    this.images['logo'] = 'logo';
    this.images['mainLogo'] = 'mainLogo';
    this.mainLogoSubject$.next('mainLogo');
    for (let key in this.lightTheme) {
      this.apply(key as ThemeColorType, this.lightTheme[key] as IThemeRgbColor);
    }
  }

  setDarkTheme() {
    this.currentTheme = 'dark';
    this.currentThemeSubject$.next(this.darkTheme);
    this.images['logo'] = 'logoDark';
    this.images['mainLogo'] = 'mainLogoDark';
    this.mainLogoSubject$.next('mainLogoDark');
    for (let key in this.darkTheme) {
      this.apply(key as ThemeColorType, this.darkTheme[key] as IThemeRgbColor);
    }
  }

  toggleTheme() {
    this.currentTheme === 'light' ? this.setDarkTheme() : this.setLightTheme();
  }

  get logo() {
    return this.images['logo'];
  }

  get mainLogo() {
    return this.images['mainLogo'];
  }

  get currentThemeData() {
    return this.currentTheme === 'light' ? this.lightTheme : this.darkTheme;
  }

  get currentTheme$() {
    return this.currentThemeSubject$.asObservable();
  }

  get mainLogo$() {
    return this.mainLogoSubject$.asObservable();
  }
}
