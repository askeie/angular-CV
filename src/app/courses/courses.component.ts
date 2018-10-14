import { Component, OnInit } from '@angular/core';
import { CourseModel} from '../models/CourseModel';
import {Courses} from '../models/MockCourses';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  courses = Courses; 

  constructor() { 
  }

  selectedCourse: CourseModel;

  onSelect(course: CourseModel): void {
  this.selectedCourse = course;
  }

  ngOnInit() {
  }
}
