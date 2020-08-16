import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonListComponent } from './components/person-list/person-list.component';
import { PersonFormComponent } from './components/person-form/person-form.component';
import { PersonUpdateFormComponent } from './components/person-update-form/person-update-form.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/people',
    pathMatch: 'full'
  },
  {
    path: 'people',
    component: PersonListComponent
  },
  {
    path: 'person/add',
    component: PersonFormComponent
  },
  {
    path: 'person/edit/:id',
    component: PersonUpdateFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
