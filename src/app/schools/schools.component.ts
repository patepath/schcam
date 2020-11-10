import { Component, OnInit } from '@angular/core';
import { School } from '../school';

@Component({
  selector: 'app-schools',
  templateUrl: './schools.component.html',
  styleUrls: ['./schools.component.css']
})

export class SchoolsComponent implements OnInit {
	title='School';
	edited = false;	

	school = new School;

	constructor() { 

	}

	ngOnInit(): void {
		this.edited = false;
	}

	add(): void {
		this.edited = true;
	}

	edit(): void {
	}

	save(): void {
		this.edited = false;
	}

}
