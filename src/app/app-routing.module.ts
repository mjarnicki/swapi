import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PeopleListComponent } from './people-list/people-list.component';
import { SinglePersonComponent } from './single-person/single-person.component';

const routes: Routes = [
  {
    path: '',
    component: PeopleListComponent,
  },
  {
    path: ':id',
    component: SinglePersonComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
