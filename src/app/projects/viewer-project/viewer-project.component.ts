import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
    this.projectname = serviceProject.getProjectById(this.projectId);
  }

  ngOnInit() {}
}
