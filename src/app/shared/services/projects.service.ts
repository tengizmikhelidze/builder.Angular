import {inject, Injectable, signal} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Project} from '../../core/interfaces';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  private https = inject(HttpClient);

  getAll() {
    return this.https.get<Project[]>(`${environment.projectsUrl}/getAll`)
  }
}
