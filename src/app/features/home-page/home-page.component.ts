import {Component, inject, signal} from '@angular/core';
import {HeaderComponent} from '../../shared/components';
import {Carousel} from 'primeng/carousel';
import {ProjectsService} from '../../shared/services';
import {Project} from '../../core/interfaces';
import {forkJoin, Observable, take, tap} from 'rxjs';

@Component({
  selector: 'app-home-page',
  imports: [
    HeaderComponent,
    Carousel
  ],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss', './home-page.component.responsive.scss']
})
export class HomePageComponent {
  private readonly projectsService = inject(ProjectsService);
  projects = signal<Project[]>([]);
  animate: boolean = true;

  constructor() {
    this.getInitialData();
  }

  getInitialData() {
    forkJoin([this.getAllProjects()])
      .pipe(take(1))
      .subscribe();
  }

  getAllProjects(): Observable<Project[]> {
    return this.projectsService.getAll().pipe(
      tap((projects) => this.projects.set(projects))
    );
  }

  onPageChange(): void {
    this.animate = false;
    setTimeout(() => {
      this.animate = true;
    }, 50);
  }
}
