import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProjectsService } from '../projects.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  projects$: Observable<any>;

  constructor(private projectsService: ProjectsService) { }

  ngOnInit(): void {
    this.projects$ = this.projectsService.getJSON();
  }

}
