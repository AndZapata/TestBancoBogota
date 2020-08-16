export class Person {
  constructor(
    public person_id: number,
    public name: string,
    public birth: Date,
    public father_id?: number,
    public mother_id?: number,
    public child_id?: number
  ) {}
}
