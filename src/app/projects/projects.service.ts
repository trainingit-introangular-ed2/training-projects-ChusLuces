import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { isNullOrUndefined } from 'util';
import { environment } from '../enviroment/enviroment';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  private urlapi = 'https://api-base.herokuapp.com/api/pub/projects';
  public Projects: any; /* colección de objectos projecto */
  public GetListOfProjects: any[]; /*lista de objetos proyecto*/

  constructor(private httpclient: HttpClient) {
    this.getListOfProyectsByApi();
  }

  public guardarProyecto(nameNewProject: string) {
    const p = { id: this.getNumberOfProjects() + 1, name: nameNewProject };
    console.log('guardar' + p.name);
    console.log('guardar' + p.id);
    this.postProjects(p);
  }
  public getProjectById(projectId: number) {
    // tslint:disable-next-line: triple-equals
    if (isNullOrUndefined(this.Projects.find(x => x.id == projectId))) {
      return 'El proyecto buscado no existe en el sistema';
    } else {
      // tslint:disable-next-line: triple-equals
      return environment.projects.find(x => x.id == projectId).name;
    }
  }
  public getNumberOfProjects(): number {
    this.getListOfProyectsByApi();
    console.log('obten numprojects');

    if (this.Projects == null || this.Projects === undefined) {
      return 0;
    } else {
      return this.Projects.length;
    }
  }
  private getListOfProyectsByApi() {
    this.httpclient.get(this.urlapi).subscribe(apiData => {
      this.GetListOfProjects = this.transformProjectsData(apiData);
      console.log(this.Projects);
    });
  }
  private transformProjectsData(projectsData: any): any[] {
    if (projectsData != null) {
      return Object.keys(projectsData).map(key => ({
        id: projectsData[key].id,
        name: projectsData[key].name
      }));
    } else {
      return [];
    }
  }

  public postProjects(p: any) {
    this.httpclient.post(this.urlapi, p).subscribe();
  }
}
