import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Person } from '../../models/person.model';


@Component({
  selector: 'person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.css'],
})
export class PersonFormComponent implements OnInit {
  
  constructor() {}

  ngOnInit(): void {}

}
