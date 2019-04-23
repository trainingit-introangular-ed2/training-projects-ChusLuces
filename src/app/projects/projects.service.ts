import { Injectable } from '@angular/core';
import { isNullOrUndefined } from 'util';
import { environment } from '../enviroment/enviroment';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  constructor() {}
  //public GetNumberOfProjects = environment.projects.length;
  public GetListOfProjects = environment.projects;

  public guardarProyecto(nameNewProject: string) {
    const p = { id: environment.projects.length + 1, name: nameNewProject };
    console.log('guardar' + p);
    environment.projects.push(p);
  }
  public getProjectById(projectId: number) {
    // tslint:disable-next-line: triple-equals
    if (isNullOrUndefined(environment.projects.find(x => x.id == projectId))) {
      return 'El proyecto buscado no existe en el sistema';
    } else {
      // tslint:disable-next-line: triple-equals
      return environment.projects.find(x => x.id == projectId).name;
    }
  }
  public getNumberOfProjects(): number {
    console.log('obten numprojects');
    return environment.projects.length;
  }
}
