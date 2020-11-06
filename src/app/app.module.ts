import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { StudentsComponent } from './students/students.component';
import { InstructorComponent } from './instructor/instructor.component';
import { RoomsComponent } from './rooms/rooms.component';
import { SchoolsComponent } from './schools/schools.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { UserComponent } from './user/user.component';
import { ParentsComponent } from './parents/parents.component';


const appRoute: Routes = [
	{ path: '', redirectTo: '/students', pathMatch: 'full' }, 
	{ path: 'students', component: StudentsComponent }, 
	{ path: 'parents', component: ParentsComponent }, 
	{ path: 'instructors', component: InstructorComponent }, 
	{ path: 'rooms', component: RoomsComponent }, 
	{ path: 'subjects', component: SubjectsComponent }, 
	{ path: 'user', component: UserComponent }, 
	{ path: 'schools', component: SchoolsComponent } 
];

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
	InstructorComponent,
    RoomsComponent,
    SubjectsComponent,
    UserComponent,
    ParentsComponent,
    SchoolsComponent
  ],
  imports: [
    BrowserModule,
	FormsModule,
    AppRoutingModule,
	RouterModule.forRoot(
		appRoute,
		{ enableTracing: true }
	)
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {

}
