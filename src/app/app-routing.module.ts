import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { HomeComponent } from './home/home.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { ProjectsComponent } from './projects/projects.component';

const routes: Routes = [{
  path: '',
  component: ProjectsComponent,
}, {
  path: ':project',
  component: ProjectDetailComponent
},
  //   children: [
  //     {
  //       path: ':project',
  //       component: ProjectDetailComponent
  //     }
  //   ],
  // },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
