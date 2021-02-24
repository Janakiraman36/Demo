import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 
import { from } from 'rxjs';
import { NavbarComponent } from '../app/navbar/navbar.component';
import { FirstComponent } from '../app/first/first.component';
import { SecondComponent } from '../app/second/second.component';
import { ThirdComponent } from '../app/third/third.component';
import { FourthComponent } from '../app/fourth/fourth.component';
import { FifthComponent } from '../app/fifth/fifth.component';
import { Edit1Component } from '../app/edit1/edit1.component';
import { Edit2Component } from '../app/edit2/edit2.component';

const routes: Routes = [
  {
    path:'navbar',
    component:NavbarComponent
  },
  { 
    path:'first',
    component:FirstComponent
  },
  {
    path:'second',
    component:SecondComponent
  },
  {
    path:'third',
    component:ThirdComponent
  },
  {
    path:'fourth',
    component:FourthComponent
  },
  {
    path:'fifth',
    component:FifthComponent
  },
  {
    path:'edit1/:id',
    component:Edit1Component
  },
  {
    path:'edit2/:id',
    component:Edit2Component
  }
    ];
  // {
  //   path:'admin',
  //   component:AdminPageComponent,
  //   children:[
  //     { path:'class',component:ClassComponent },
  //     { path:'section', component:SectionComponent},
  //     { path:'subject', component:SubjectComponent },
  //     { path:'add-teacher', component:AddTeacherComponent },
  //     { path:'list-teacher', component:ListTeacherComponent },
  //     { path:'list-items', component:ListItemComponent },
  //     { path:'add-student', component:AddStudentComponent },
  //     { path:'list-student', component:ListStudentComponent }
  //   ]
  // },

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
