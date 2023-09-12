import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PORTFOLIOComponent } from './portfolio/portfolio.component';
import { CONTACTComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path:"",component:HomeComponent,title:"home"},
  {path:"about",component:AboutComponent,title:"about"},
  {path:"portfolio",component:PORTFOLIOComponent,title:"portfolio"},
  {path:"contact",component:CONTACTComponent,title:"contact"},
  {path:"**",component:NotFoundComponent,title:"404"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
