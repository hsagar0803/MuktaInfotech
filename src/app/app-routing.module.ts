import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CarosualComponent } from './carosual/carosual.component';
import { ContactComponent } from './contact/contact.component';
import { CoursesComponent } from './courses/courses.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { RagisterComponent } from './ragister/ragister.component';
import { TrainerComponent } from './trainer/trainer.component';

const routes: Routes = [
  {path:'home', component : HomeComponent},
  {path: 'ragister', component : RagisterComponent},
  {path : 'footer', component : FooterComponent},
  {path :'about', component : AboutComponent},
  {path : 'courses', component : CoursesComponent},
  {path: 'trainer', component : TrainerComponent},
  {path: 'contact', component: ContactComponent},
  {path:'carosual', component : CarosualComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
