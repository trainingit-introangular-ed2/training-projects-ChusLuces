import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilterProjectsComponent } from '../filter-projects/filter-projects.component';

const routes: Routes = [
  {
    path: '',
    component: FilterProjectsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewerRoutingModule {}
