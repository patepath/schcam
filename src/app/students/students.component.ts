import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { STUDENTS } from '../student-list';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
	students = STUDENTS;
	selectStudent: Student;

	constructor() { }

	ngOnInit(): void {
	}

}
