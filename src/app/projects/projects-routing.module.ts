import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewProjectComponent } from './new-project/new-project.component';
import { ProjectsComponent } from './projects/projects.component';
import { ViewerProjectComponent } from './viewer-project/viewer-project.component';

const routes: Routes = [
  {
    path: '',
    component: ProjectsComponent
  },
  {
    path: 'viewer-project',
    component: ViewerProjectComponent
  },
  {
    path: 'new-project',
    component: NewProjectComponent
  },
  {
    path: 'viewer-project/:id',
    component: ViewerProjectComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule {}
