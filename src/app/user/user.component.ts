import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
	title = 'User Account';
	edited: boolean;
	username: string;
	password: string;

	roles = ['Administrator', 'User'];
	public role: string;

	constructor() { 
	}

	ngOnInit(): void {
		this.edited = false;
	}

	add() {
		this.title = 'User Registration';
		this.edited = true;
	}

	save() {
		this.title = 'User';
		this.edited = false;
	}

}
