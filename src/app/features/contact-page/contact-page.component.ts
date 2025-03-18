import {Component} from '@angular/core';
import {HeaderComponent} from '../../shared/components';
import {ContactPageFirstSectionComponent} from './contact-page-first-section/contact-page-first-section.component';

@Component({
  selector: 'app-contact-page',
  imports: [
    HeaderComponent,
    ContactPageFirstSectionComponent
  ],
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss', './contact-page.component.responsive.scss']
})
export class ContactPageComponent {

}
