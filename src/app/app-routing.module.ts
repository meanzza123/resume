import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ResumeComponent } from './components/resume/resume.component';
const routes: Routes = [
  { path: '', component:  AboutMeComponent },
  { path: 'contact',  component: ContactComponent },
  { path: 'projects',  component: ProjectsComponent },
  { path: 'resume',  component: ResumeComponent },
  { path: 'about-me',  component: AboutMeComponent },
  { path: '**', redirectTo: 'about-me' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
