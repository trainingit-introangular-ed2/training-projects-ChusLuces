import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../../projects/projects.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public header = 'Inicio';
  public description = 'Número de proyectos';
  public counterClass = 'tag secondary';
  public numProjects: number;

  constructor(private projectsService: ProjectsService) {
    this.projectsNumber();
  }

  ngOnInit() {}

  public projectsNumber() {
    this.numProjects = this.projectsService.getNumberOfProjects();
  }
}
