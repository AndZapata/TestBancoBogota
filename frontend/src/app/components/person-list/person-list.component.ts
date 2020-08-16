import { Component, OnInit } from '@angular/core';

import { PeopleService } from '../../services/people.service';
import { Person } from 'src/app/models/person.model';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css'],
})
export class PersonListComponent implements OnInit {
  people: any = [];

  constructor(private peopleService: PeopleService) {}

  ngOnInit(): void {
    this.getPeople();
  }

  getPeople() {
    this.peopleService.getPeople().subscribe(
      (res) => {
        this.people = res;
      },
      (err) => console.log(err)
    );
  }

  deletePerson(id: number) {
    this.peopleService.deletePersonById(id).subscribe(
      (res) => {
        console.log(res);
        this.getPeople();
      },
      (err) => console.error(err)
    );
  }
}
