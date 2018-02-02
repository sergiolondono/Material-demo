import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  isChecked = true;

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
}

