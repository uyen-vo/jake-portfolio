import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


export interface Project {
  url: string;
  title: string;
  topics: string[];
  description: string;
  preview: string;
  images: string[];
}

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(private http: HttpClient) { }

  getJSON() {
    return this.http.get<Project[]>('../assets/projects.json');
  }

  getProjectByUrl(url: string): Observable<Project | null> {
    return this.getJSON()
      .pipe(map(projects => {
        const filtered = projects.filter(x => x.url === url);

        if (filtered.length > 0) {
          return filtered[0];
        }
        return null;
      }));
  }

}
