import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-viewer-project',
  templateUrl: './viewer-project.component.html',
  styleUrls: ['./viewer-project.component.css']
})
export class ViewerProjectComponent implements OnInit {
  public projectname = '';
  public projectId = 0;
  constructor(activateRoute: ActivatedRoute) {
    this.projectId = activateRoute.snapshot.params['id'];
    this.getProjectById();
  }
  public getProjectById() {
    // tslint:disable-next-line: triple-equals
    this.projectname = environment.projects.find(x => x.id == this.projectId).name;
  }
  ngOnInit() {}
}
