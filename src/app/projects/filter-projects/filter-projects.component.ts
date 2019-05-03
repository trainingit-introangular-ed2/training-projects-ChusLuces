import { Component, OnInit } from '@angular/core';
import { isNullOrUndefined } from 'util';
import { project, ProjectsService } from '../projects.service';

@Component({
  selector: 'app-filter-projects',
  templateUrl: './filter-projects.component.html',
  styleUrls: ['./filter-projects.component.css']
})
export class FilterProjectsComponent implements OnInit {
  public idProject: number;
  public nameProject: string;

  constructor(private service: ProjectsService) {}

  public getProjectById(idbuscado: number) {
    let project: project;
    this.service.myListOfProjects$.subscribe(x => {
      project = x.find(y => y.id === idbuscado);
      if (isNullOrUndefined(project)) {
        this.nameProject = 'En este momento no existe el identificador buscado.';
      } else {
        this.nameProject = project.name;
      }
    });
  }
  ngOnInit() {}
}
