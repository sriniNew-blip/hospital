import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DepartmentsComponent } from './components/departments/departments.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'departments', component: DepartmentsComponent },
   { path: 'about', component: AboutComponent },
   { path: 'contact', component: ContactComponent },

  { path: '**', redirectTo: '' }
];
