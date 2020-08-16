import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { from } from 'rxjs';
import { PersonFormComponent } from './components/person-form/person-form.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { PersonListComponent } from './components/person-list/person-list.component';

import { PeopleService } from './services/people.service';
import { PersonUpdateFormComponent } from './components/person-update-form/person-update-form.component';


@NgModule({
  declarations: [
    AppComponent,
    PersonFormComponent,
    NavigationComponent,
    PersonListComponent,
    PersonUpdateFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule],
  providers: [PeopleService],
  bootstrap: [AppComponent],
})
export class AppModule {}
