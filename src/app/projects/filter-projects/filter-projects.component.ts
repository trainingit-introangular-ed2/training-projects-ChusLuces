import { Component, OnInit } from '@angular/core';
import { isNullOrUndefined } from 'util';
import { ProjectsService } from '../projects.service';

@Component({
  selector: 'app-filter-projects',
  templateUrl: './filter-projects.component.html',
  styleUrls: ['./filter-projects.component.css']
})
export class FilterProjectsComponent implements OnInit {
  public idProject: number;
  public nameProject: string;

  constructor(private service: ProjectsService) {}
  public getProjectById(idProject: number) {
    if (isNullOrUndefined(this.service.getProjectById(idProject))) {
      this.nameProject = 'No existe un proyecto para este identificador';
    } else {
      this.nameProject = this.service.getProjectById(idProject);
    }
  }
  ngOnInit() {}
}
