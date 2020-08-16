import { Component, OnInit, HostBinding } from '@angular/core';
import { PeopleService } from 'src/app/services/people.service';
import { Router } from '@angular/router';


@Component({
  selector: 'person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.css'],
})
export class PersonFormComponent implements OnInit {
  
  @HostBinding('class') classes = 'row';

  person: any = {
    name: '',
    birth: new Date()
  };

  constructor(private peopleService: PeopleService, private router: Router) {}

  ngOnInit(): void {}

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
