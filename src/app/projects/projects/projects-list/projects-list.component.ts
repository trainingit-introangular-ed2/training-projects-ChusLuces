import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../../projects.service';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.css']
})
export class ProjectsListComponent implements OnInit {
  public header = 'Proyectos';
  public description = 'Lista de proyectos';
  public counterClass = 'tag secondary';
  public liProyects: any;
  public numProjects: number;
  constructor(private serviceProjects: ProjectsService) {}

  ngOnInit() {
    this.liProyects = this.serviceProjects.GetListOfProjects;
    this.numProjects = this.serviceProjects.getNumberOfProjects();
  }
}
