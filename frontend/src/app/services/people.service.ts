import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Person } from '../models/person.model';

@Injectable({
  providedIn: 'root',
})
export class PeopleService {
  API_URI = '/api/person/';
  constructor(private http: HttpClient) {}

  getPeople() {
    return this.http.get(`${this.API_URI}`);
  }

  savePeople(person: Person) {
    return this.http.post(`${this.API_URI}`, person);
  }

  deletePersonById(id: number) {
    return this.http.put(`${this.API_URI}/delete/${id}`, {});
  }

  updatePersonById(id: number, updatedData) {
    return this.http.put(`${this.API_URI}/delete/${id}`, updatedData);
  }
}
