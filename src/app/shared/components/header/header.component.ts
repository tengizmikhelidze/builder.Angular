import {Component, inject, signal} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {TranslatePipe} from '@ngx-translate/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [
    NgOptimizedImage,
    TranslatePipe
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  private router = inject(Router)

  eng = signal<string>(this.engChooser())

  get isEng() {
    return this.router.url.includes("/en/")
  }

  engChooser() {
    switch (this.isEng) {
      case true: {
        return 'Geo'
      }
      case  false: {
        return "Eng"
      }
    }
  }

  changeLanguage() {
    switch (this.isEng) {
      case true: {
        this.navigate("ka")
        break;
      }

      case false: {
       this.navigate("en");
        break;
      }
    }
  }

  navigate(lang: 'en' | 'ka' | 'same', navigateTo?: string) {
    const urlLang = this.router.url.slice(0, 3);
    const urlSegment = navigateTo ?? this.router.url.slice(3);
    this.router.navigateByUrl((navigateTo ? urlLang : lang)+urlSegment)
      .then(()=> {
        this.eng.set(this.engChooser())
      })
  }
}
