import {Component, HostListener, inject, model, signal} from '@angular/core';
import {NgOptimizedImage, NgStyle} from '@angular/common';
import {TranslatePipe} from '@ngx-translate/core';
import {Router} from '@angular/router';
import {BurgerMenuComponent} from '../burger-menu/burger-menu.component';

@Component({
  selector: 'app-header',
  imports: [
    NgOptimizedImage,
    TranslatePipe,
    NgStyle,
    BurgerMenuComponent
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  private router = inject(Router);

  eng = signal<string>(this.engChooser());

  headerBackground: string = 'transparent';
  headerBorder = model<string>('1px solid transparent')
  headerVisible: boolean = true;
  private lastScrollTop: number = 0;
  private readonly scrollThreshold: number = 100;

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const currentScroll = window.scrollY || document.documentElement.scrollTop;
    this.headerBackground = currentScroll > this.scrollThreshold
      ? 'var(--header-background)'
      : 'transparent';
    this.headerBorder.set(currentScroll > this.scrollThreshold
      ? '1px solid rgba(255, 255, 255, 0.1)'
      : '1px solid transparent')
    // Hide header if scrolling down past threshold; show otherwise.
    this.headerVisible = !(currentScroll > this.lastScrollTop && currentScroll > this.scrollThreshold);
    this.lastScrollTop = Math.max(0, currentScroll);
  }

  get isEng(): boolean {
    return this.router.url.startsWith('/en');
  }

  engChooser(): string {
    return this.isEng ? 'Geo' : 'Eng';
  }

  changeLanguage(): void {
    const targetLang: 'en' | 'ka' = this.isEng ? 'ka' : 'en';
    this.navigate(targetLang);
  }

  navigate(lang: 'en' | 'ka' | 'same', navigateTo?: string): void {
    const currentUrl = this.router.url;
    const prefix = lang === 'same'
      ? (currentUrl.startsWith('/en') ? 'en' : 'ka')
      : lang;
    const urlSegment = navigateTo ?? currentUrl.substring(3);
    this.router.navigateByUrl(`/${prefix}${urlSegment}`)
      .then(() => this.eng.set(this.engChooser()));
  }
}
