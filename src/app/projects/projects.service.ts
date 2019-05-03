import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  private urlapi = 'https://api-base.herokuapp.com/api/pub/projects';
  public myListOfProjects$: Observable<project[]> = null; /* colección de objectos projecto */
  public Projects$: Observable<any> = null;
  public GetListOfProjects: any[]; /*lista de objetos proyecto*/

  constructor(private httpclient: HttpClient) {
    //this.getListOfProyectsByApi();
    this.getCurrentProjects();
  }
  public getNumberOfProjects() {}
  public getCurrentProjects() {
    this.Projects$ = this.httpclient.get(this.urlapi);
    this.myListOfProjects$ = this.Projects$.pipe(
      tap(d => console.log(d)),
      map(this.transformProjectsData),
      tap(t => console.log(t))
    );
  }

  public guardarProyecto(nameNewProject: string) {
    const p = { id: Math.floor(Math.random() * 100 + 1), name: nameNewProject };
    console.log('guardar' + p.name);
    console.log('guardar' + p.id);
    this.postProjects(p);
  }
  public getProjectById(projectId: number) {
    let proBuscado: any;
    // tslint:disable-next-line: triple-equals
    this.myListOfProjects$.subscribe(x => (proBuscado = x.find(y => y.id === projectId)));
    return proBuscado;
  }

  private transformProjectsData(projectsData) {
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
// tslint:disable-next-line: class-name
export interface project {
  id: number;
  name: string;
}
