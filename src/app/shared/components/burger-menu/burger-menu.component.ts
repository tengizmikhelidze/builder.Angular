import {Component, inject, model} from '@angular/core';
import {TranslatePipe} from '@ngx-translate/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-burger-menu',
  imports: [
    TranslatePipe
  ],
  templateUrl: './burger-menu.component.html',
  styleUrl: './burger-menu.component.scss'
})
export class BurgerMenuComponent {
  private router = inject(Router);
  menuOpen = model<boolean>(false);

  toggleMenu(): void {
    this.menuOpen.set(!this.menuOpen());
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
