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

  navigate(lang: 'en' | 'ka' | 'same', navigateTo?: string): void {
    const currentUrl = this.router.url;
    const prefix = lang === 'same'
      ? (currentUrl.startsWith('/en') ? 'en' : 'ka')
      : lang;
    const urlSegment = navigateTo ?? currentUrl.substring(3);
    this.router.navigateByUrl(`/${prefix}${urlSegment}`)
  }
}
