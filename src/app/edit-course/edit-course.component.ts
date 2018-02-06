import { Component, OnInit, Inject, InjectionToken } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css']
})
export class EditCourseComponent implements OnInit {
dataReceived: any;
  constructor(@Inject(MAT_DIALOG_DATA) data: any) {
       console.log('Data: ', data );
       this.dataReceived = data;
  }

  ngOnInit() {
  }

}
