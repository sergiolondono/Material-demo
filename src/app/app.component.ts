import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/timer';
import 'rxjs/add/observable/of';
import { MatDialog, MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { EditCourseComponent } from './edit-course/edit-course.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { UserService } from './services/user.service';
import {DataSource} from '@angular/cdk/collections';
import { User } from './models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  displayedColumns = ['id', 'name', 'progress', 'color'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

progress = 0;
timer;
isLinear = false;
firstFormGroup: FormGroup;
secondFormGroup: FormGroup;

isLoading = false;

  constructor(private dialog: MatDialog, private _formBuilder: FormBuilder,
    private http: HttpClient, private userService: UserService) {
    this.isLoading = true;
    const users: UserData[] = [];
    for (let i = 1; i <= 100; i++) { users.push(createNewUser(i)); }
    this.dataSource = new MatTableDataSource(users);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  private serviceUrl = 'https://jsonplaceholder.typicode.com/users';
  

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

function createNewUser(id: number): UserData {
  const name =
      NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
      NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';

  return {
    id: id.toString(),
    name: name,
    progress: Math.round(Math.random() * 100).toString(),
    color: COLORS[Math.round(Math.random() * (COLORS.length - 1))]
  };
}

/** Constants used to fill up our data base. */
const COLORS = ['maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple',
  'fuchsia', 'lime', 'teal', 'aqua', 'blue', 'navy', 'black', 'gray'];
const NAMES = ['Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack',
  'Charlotte', 'Theodore', 'Isla', 'Oliver', 'Isabella', 'Jasper',
  'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'];

export interface UserData {
  id: string;
  name: string;
  progress: string;
  color: string;
}
