import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';

const routes: Routes = [{
  path: '',
  component: HomeComponent,
}, {
  path: ':project',
  component: ProjectDetailComponent
},
  // children: [
  //   {
  //     path: 'creative',
  //     component: CreativeComponent
  //   }
  // ],

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
