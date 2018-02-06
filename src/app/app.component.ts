import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/timer';
import { MatDialog } from '@angular/material';
import { EditCourseComponent } from './edit-course/edit-course.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
progress = 0;
timer;

isLoading = false;

  constructor(private dialog: MatDialog) {
    this.isLoading = true;
    this.getCourses()
    .subscribe(x => this.isLoading = false);
  }

  title = 'app';
  isChecked = true;

  categories = [
    { name: 'Beginer' },
    { name: 'Intermediate' },
    { name: 'Advanced' }
  ];

  genres = [
    {id: 1, name: 'Male'},
    {id: 2, name: 'Female'}
  ];

  selectedGenre = 1;

   cities = [
    { value: 0, name: 'Bogotá'},
    { value: 1, name: 'Medellín' },
    { value: 2, name: 'Cali' }
  ];

  selectedCity = 2;

  minDate = new Date(2017, 1, 1);
  maxDate = new Date(2017, 8, 1);

  selectCategory(category) {
    this.categories
    .filter(c => c !== category)
    .forEach(c => c['selected'] = false);

    category.selected = !category.selected;
  }

  getCourses() {
    return Observable.timer(2000);
  }

  openDialog() {
    this.dialog.open(EditCourseComponent, {
      data:  {
        courseId: 1
      }
    })
      .afterClosed()
      .subscribe(result => console.log(result));
  }
}

