import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  public header = 'Proyectos';
  public description = 'Lista de proyectos';
  public counterClass = 'tag secondary';
  public formHidden = false;
  public liProyects = environment.projects;
  public project = { environment: 0 };
  public numProjects = environment.projects.length;
  constructor() {}
  // tslint:disable-next-line: no-unused-expression
  ngOnInit() {}
}
