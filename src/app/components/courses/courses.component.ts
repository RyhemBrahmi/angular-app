import { Component,OnInit  } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { CourseService, Course } from '../../services/course/course.service';
import { HttpClientModule } from '@angular/common/http'; 

@Component({
  selector: 'app-courses',
  imports: [
    MatCardModule,
    CommonModule,
    MatIconModule,
    HttpClientModule  
  ],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css',
  standalone: true,
})
export class CoursesComponent implements OnInit {
  courses: Course[] = [];  

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
   
    this.courseService.getCourses().subscribe(
      (data: Course[]) => {
        this.courses = data;
      },
      (error) => {
        console.error('Erreur lors du chargement des cours:', error);
      }
    );
  }
}
