import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-courses',
  imports: [
    MatCardModule,
    CommonModule
  ],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css',
  standalone: true,
})
export class CoursesComponent {
  courses = [
    { id: 1, name: 'Mathematics', description: 'A course about mathematics.' },
    { id: 2, name: 'Physics', description: 'A course about physics.' },
    { id: 3, name: 'Computer Science', description: 'A course about computer science.' },
    { id: 4, name: 'Chemistry', description: 'A course about chemistry.' }
  ];
}
