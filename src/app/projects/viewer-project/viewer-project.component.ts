import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { isNullOrUndefined } from 'util';
import { ProjectsService } from '../projects.service';

@Component({
  selector: 'app-viewer-project',
  templateUrl: './viewer-project.component.html',
  styleUrls: ['./viewer-project.component.css']
})
export class ViewerProjectComponent implements OnInit {
  public projectname: string;
  public projectId: number;

  constructor(activateRoute: ActivatedRoute, serviceProject: ProjectsService) {
    this.projectId = activateRoute.snapshot.params['id'];
    //console.log(this.projectId);
    if (isNullOrUndefined(serviceProject.getProjectById(this.projectId))) {
      this.projectname = 'Actualmente no existe un proyecto con el identificador solicitado.';
    } else {
      this.projectname = serviceProject.getProjectById(this.projectId).name;
    }
  }

  ngOnInit() {}
}
