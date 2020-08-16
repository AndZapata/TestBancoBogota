import { Component, OnInit, HostBinding } from '@angular/core';
import { from } from 'rxjs';
import { Person } from '../../models/person.model';
import { PeopleService } from 'src/app/services/people.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.css'],
})
export class PersonFormComponent implements OnInit {
  
  @HostBinding('class') classes = 'row';

  person: Person = {
    name: '',
    birth: new Date()
  };

  constructor(private peopleService: PeopleService, private router: Router, private activedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    const params = this.activedRoute.snapshot.params;
    if (params.person_id) {
      this.peopleService.getPeople(params.person_id)
      .subscribe()
    }
  }

  saveNewPerson() {
    this.peopleService.savePeople(this.person)
    .subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/people']);
      },
      err => console.error(err)
    );
  }

}
