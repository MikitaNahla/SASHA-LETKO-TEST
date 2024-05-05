import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoComponent } from './components/logo/logo.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ThemeSwitcherComponent } from './core/components/theme-switcher/theme-switcher.component';
import { HeaderAnimationDirective } from './core/directives/header-animation.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoComponent,
    HeaderAnimationDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ThemeSwitcherComponent
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
