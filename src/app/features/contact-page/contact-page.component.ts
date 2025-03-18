import {Component} from '@angular/core';
import {HeaderComponent} from '../../shared/components';
import {ContactPageFirstSectionComponent} from './contact-page-first-section/contact-page-first-section.component';
import {Button} from "primeng/button";
import {SpeedDial} from "primeng/speeddial";
import {NgClass, NgStyle} from '@angular/common';
import {ContactPageSecondSectionComponent} from './contact-page-second-section/contact-page-second-section.component';

@Component({
  selector: 'app-contact-page',
  imports: [
    HeaderComponent,
    ContactPageFirstSectionComponent,
    Button,
    SpeedDial,
    NgClass,
    NgStyle,
    ContactPageSecondSectionComponent
  ],
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss', './contact-page.component.responsive.scss']
})
export class ContactPageComponent {

  messageContacts = [
    {
      icon: "pi-facebook",
      background: "#1877F2",
      href: ''
    },
    {
      icon: "pi-whatsapp",
      background: "#25d366",
      href: ''
    }
  ]

  dialContacts = [
    {
      number: '(+995) 599 93 42 11'
    },
    {
      number: '(+995) 555 93 42 11'
    }
  ]
}
