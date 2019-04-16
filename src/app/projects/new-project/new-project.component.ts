import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css']
})
export class NewProjectComponent implements OnInit {
  public nameNewProject: string;
  public numProjects = environment.projects.length;
  constructor() {}
  public projects = environment.projects;

  ngOnInit() {}

  public guardarProyecto() {
    const p = { id: environment.projects.length + 1, name: this.nameNewProject };
    console.log('guardar' + p);
    environment.projects.push(p);
    this.limpiarConsola();
  }
  public limpiarConsola() {
    this.nameNewProject = '';
  }
}
