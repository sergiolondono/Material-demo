import { CourseService } from './course.service';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { EditCourseComponent } from './edit-course/edit-course.component';
import { MatComponentsModule } from './mat-components/mat-components.module';
import { HttpClientModule } from '@angular/common/http';
import { UsertableComponent } from './components/usertable/usertable.component';

import { UserService } from './services/user.service';

@NgModule({
  declarations: [
    AppComponent,
    EditCourseComponent,
    UsertableComponent
  ],
  entryComponents: [
    EditCourseComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatComponentsModule,
    HttpClientModule
  ],
  providers: [
    CourseService,  
    UserService,  
    { provide: CourseService, useClass: CourseService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
