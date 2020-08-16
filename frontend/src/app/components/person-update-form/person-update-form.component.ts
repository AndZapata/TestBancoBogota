import { Component, OnInit, HostBinding } from '@angular/core';
import { PeopleService } from 'src/app/services/people.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-person-update-form',
  templateUrl: './person-update-form.component.html',
  styleUrls: ['./person-update-form.component.css'],
})
export class PersonUpdateFormComponent implements OnInit {
  @HostBinding('class') classes = 'row';

  values = '';
  people: any = [];
  person: any = {
    name: '',
    birth: new Date(),
  };

  constructor(
    private peopleService: PeopleService,
    private router: Router,
    private activedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const params = this.activedRoute.snapshot.params;
    if (params.id) {
      this.peopleService.getPerson(params.id).subscribe(
        (res) => {
          console.log(res);
          this.person = res;
        },
        (err) => console.error(err)
      );
    }
  }

  updatePerson() {
    this.peopleService
      .updatePersonById(this.person.person_id, this.person)
      .subscribe(
        (res) => {
          console.log(res);
          this.router.navigate(['/people']);
        },
        (err) => console.error(err)
      );
  }

  // getParent() {
  //   this.peopleService.getPeople().subscribe(
  //     (res) => {
  //       console.log(res);
  //       this.people = res;  
  //     },
  //     (err) => console.log(err)
  //   );
  // }

  // onKey(event: any) { // without type info
  //   this.values += event.target.value; 
  //   this.getParent();
  //   console.log(this.values)
  //   this.people.forEach(element => {
  //     if (element.name == this.values) {
  //       this.peopleService.updatePersonById(this.person.person_id, {'father_id': this.people.person_id})
  //       .subscribe(
  //         res => {
  //           this.router.navigate(['/people']);
  //         },
  //         err => console.error(err)
  //       );
  //     }
  //   }); 
  // }
}
