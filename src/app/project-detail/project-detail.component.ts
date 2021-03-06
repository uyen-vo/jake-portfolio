import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project, ProjectsService } from '../projects.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent implements OnInit {
  project: Project;

  constructor(
    private route: ActivatedRoute,
    private projectsService: ProjectsService
  ) { }

  ngOnInit(): void {
    this.route.params
      .pipe(map(p => p.project))
      .subscribe(url => {
        this.projectsService.getProjectByUrl(url)
          .subscribe(proj => this.project = proj);
      });
  }

}
