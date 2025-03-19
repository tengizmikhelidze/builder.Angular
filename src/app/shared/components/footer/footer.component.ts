import {Component, inject} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {TranslatePipe} from '@ngx-translate/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [
    NgOptimizedImage,
    TranslatePipe
  ],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss', 'footer.component.responsive.scss']
})
export class FooterComponent {
  private router = inject(Router);

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
