import {AfterViewInit, Component, ElementRef, inject, ViewChild} from '@angular/core';
import {AnimationService} from '../../../shared/services/animation.service';

@Component({
  selector: 'app-contact-page-second-section',
  imports: [],
  templateUrl: './contact-page-second-section.component.html',
  styleUrls: ['./contact-page-second-section.component.scss', './contact-page-second-section.component.responsive.scss']
})
export class ContactPageSecondSectionComponent implements AfterViewInit {
  private animationService = inject(AnimationService)
  @ViewChild('contactContainer', { static: true }) contactContainer!: ElementRef;

  ngAfterViewInit() {
    this.animationService.inView(this.contactContainer)
  }
}
