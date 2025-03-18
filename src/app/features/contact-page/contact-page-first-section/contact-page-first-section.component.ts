import {Component} from '@angular/core';
import {Button} from "primeng/button";
import {SpeedDial} from "primeng/speeddial";
import {NgClass, NgStyle} from '@angular/common';

@Component({
  selector: 'app-contact-page-first-section',
  imports: [
    Button,
    SpeedDial,
    NgClass,
    NgStyle
  ],
  templateUrl: './contact-page-first-section.component.html',
  styleUrl: './contact-page-first-section.component.scss'
})
export class ContactPageFirstSectionComponent {
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
