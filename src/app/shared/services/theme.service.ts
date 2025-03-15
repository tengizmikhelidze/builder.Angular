import {Injectable, signal} from '@angular/core';
import {ThemeType} from '../../core/types';
import {LocalstorageKeys} from '../../core/localstorage';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  selectedTheme = signal<ThemeType>('light')

  set theme(theme: ThemeType) {
    localStorage.setItem(LocalstorageKeys.theme, theme)
  }

  get theme(): ThemeType | null {
    return localStorage.getItem(LocalstorageKeys.theme) as ThemeType
  }

  setInitialTheme(){
    this.setTheme(this.theme ? this.theme : this.detectPrefersColorScheme());
  }

  setTheme(theme: ThemeType){
    document.body.setAttribute(
      'data-theme',
      theme
    );
    this.selectedTheme.set(theme);
    this.theme = this.selectedTheme();
  }

  detectPrefersColorScheme(): ThemeType {
    if (window.matchMedia('(prefers-color-scheme)').media !== 'not all') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? "dark" : "light";
    } else {
      return "light";
    }
  }
}
