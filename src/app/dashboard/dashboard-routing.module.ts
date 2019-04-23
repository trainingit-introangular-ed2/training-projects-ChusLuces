import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewProjectFormComponent } from '../projects/new-project-form/new-project-form.component';
import { ProjectsListComponent } from '../projects/projects/projects-list/projects-list.component';
import { ViewerProjectFormComponent } from '../projects/viewer-project/viewer-project-form/viewer-project-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: '/projects',
    component: ProjectsListComponent
  },
  {
    path: '/projects/viewer-project-form',
    component: ViewerProjectFormComponent
  },
  {
    path: 'new-project-form',
    component: NewProjectFormComponent
  },
  {
    path: '/projects/viewer-project-form/:id',
    component: ViewerProjectFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
