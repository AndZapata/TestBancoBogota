export interface Person {
    person_id?: number;
    name: string;
    birth: { toDate(): Date } | Date;
    father_id?: number;
    mother_id?: number;
    child_id?: number;
}
