import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../projects.service';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css']
})
export class NewProjectComponent implements OnInit {
  public nameNewProject: string;
  public numProjects: number;
  public projects: { id: number; name: string }[];

  constructor(private projectsService: ProjectsService) {
    this.projects = this.projectsService.GetListOfProjects;
    this.numProjects = this.projectsService.getNumberOfProjects();
  }

  ngOnInit() {}
  public guardarProyecto(nameProject: string) {
    this.projectsService.guardarProyecto(nameProject);
  }
}
