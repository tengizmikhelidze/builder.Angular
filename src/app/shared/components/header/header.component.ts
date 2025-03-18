import {Component, HostListener, inject, model, OnInit, signal} from '@angular/core';
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
export class HeaderComponent implements OnInit{
  private router = inject(Router);

  eng = signal<string>(this.engChooser());

  headerBackground: string = 'transparent';
  headerBorderInitial = model<string>('1px solid transparent');
  headerBorder = model<string>(this.headerBorderInitial());
  headerVisible: boolean = true;
  private lastScrollTop: number = 0;
  private readonly scrollThreshold: number = 100;

  ngOnInit() {
    this.headerBorder.set(this.headerBorderInitial())
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const currentScroll = window.scrollY || document.documentElement.scrollTop;
    this.headerBackground = currentScroll > this.scrollThreshold
      ? 'var(--header-background)'
      : 'transparent';
    this.headerBorder.set(currentScroll > this.scrollThreshold
      ? '1px solid rgba(255, 255, 255, 0.1)'
      : this.headerBorderInitial());

    this.headerVisible = !(currentScroll > this.lastScrollTop && currentScroll > this.scrollThreshold);
    this.lastScrollTop = Math.max(0, currentScroll);
  }

  get isEng(): boolean {
    return this.router.url.startsWith('/en');
  }

  engChooser(): string {
    return this.isEng ? 'Geo' : 'Eng';
  }

  getHref(navigateTo: string): string {
    const currentUrl = this.router.url;
    const prefix = currentUrl.startsWith('/en') ? 'en' : 'ka';
    return `/${prefix}${navigateTo}`;
  }

  getLanguageHref(): string {
    const currentUrl = this.router.url;
    const targetLang: 'en' | 'ka' = currentUrl.startsWith('/en') ? 'ka' : 'en';
    const urlSegment = currentUrl.substring(3);
    return `/${targetLang}${urlSegment}`;
  }
}
