import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProjectsService } from '../projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  
  projects$: Observable<any>;

  constructor(private projectsService: ProjectsService) { }

  ngOnInit(): void {
    this.projects$ = this.projectsService.getJSON();
  }
}
