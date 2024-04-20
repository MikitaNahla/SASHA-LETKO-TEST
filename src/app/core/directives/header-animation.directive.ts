import { Subject, filter, takeUntil } from 'rxjs';
import { ThemeSwitcherService } from './../services/theme-switcher.service';
import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  OnDestroy,
  OnInit,
  Renderer2,
} from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Directive({
  selector: '[appHeaderAnimation]',
})
export class HeaderAnimationDirective implements OnInit, OnDestroy {
  destroy$: Subject<any> = new Subject();

  route: string = '/main';

  @HostListener('window:scroll')
  onScrolling() {
    const height: number = this.el.nativeElement.offsetHeight;
    const scrollTop: number = window.pageYOffset;
    if (this.route.includes('main')) {
      if (scrollTop > height) {
        this.setFilled();
      } else {
        this.setNotFilled();
      }
    } else {
      this.setFilled();
    }
  }

  constructor(
    private el: ElementRef,
    private themeSwitcherService: ThemeSwitcherService,
    private renderer: Renderer2,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.themeSwitcherService.currentTheme$
      .pipe(takeUntil(this.destroy$))
      .subscribe((el) => {
        this.onScrolling();
      });

    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((route) => {
        this.route = this.router.url;
        if (!this.route.includes('main')) {
          this.setFilled();
        } else {
          this.setNotFilled();
        }
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next('');
    this.destroy$.complete();
  }

  get currentTheme() {
    return this.themeSwitcherService.currentThemeData;
  }

  setFilled() {
    this.renderer.setStyle(
      this.el.nativeElement,
      'background',
      `linear-gradient(90deg, rgb(${Object.values(
        this.currentTheme['fromGradient']
      ).join(',')}), rgb(${Object.values(this.currentTheme['toGradient']).join(
        ','
      )}))`
    );
    this.renderer.setStyle(this.el.nativeElement, 'width', '100vw');
    this.renderer.setStyle(this.el.nativeElement, 'height', '6.5rem');
    this.renderer.setStyle(this.el.nativeElement, 'z-index', '9999');
  }

  setNotFilled() {
    this.renderer.setStyle(this.el.nativeElement, 'z-index', '9999');
    this.renderer.setStyle(
      this.el.nativeElement,
      'background',
      'rgba(0, 0, 0, .0)'
    );
  }
}
