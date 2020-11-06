import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-schools',
  templateUrl: './schools.component.html',
  styleUrls: ['./schools.component.css']
})
export class SchoolsComponent implements OnInit {
	title='School';
	edited = false;	

	constructor() { }

	ngOnInit(): void {
	}

	add(): void {
	}

	edit(): void {
		alert('hello world');
	}

}
