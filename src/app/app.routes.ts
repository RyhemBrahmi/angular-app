import { Routes } from '@angular/router';
import { AuthComponent } from './components/auth/auth.component';
import { HomeComponent } from './components/home/home.component';
import { CoursesComponent } from './components/courses/courses.component';
import { ContactComponent } from './components/contact/contact.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: AuthComponent },
    { path: 'course', component: CoursesComponent },
    { path: 'contact', component: ContactComponent }
];
