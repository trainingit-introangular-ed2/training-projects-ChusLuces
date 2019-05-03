import { Component, OnInit } from '@angular/core';
import { project, ProjectsService } from '../projects.service';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css']
})
export class NewProjectComponent implements OnInit {
  public nameNewProject: string;
  public numProjects: number;
  public projects: project[];

  constructor(private projectsService: ProjectsService) {
    this.projectsService.myListOfProjects$.subscribe(x => (this.numProjects = x.length));
    this.projectsService.myListOfProjects$.subscribe(x => (this.projects = x));
  }

  ngOnInit() {}
  public guardarProyecto(nameProject: string) {
    this.projectsService.guardarProyecto(nameProject);
    //vaciamos el input
    this.nameNewProject = '';
    //actualizamos la lista
    this.projectsService.myListOfProjects$.subscribe(x => (this.projects = x));
  }
}
