import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule, MatRadioModule, MatSelectModule,
  MatDividerModule, MatInputModule, MatDatepickerModule,
  MatNativeDateModule, MatIconModule, MatButtonModule, MatChipsModule,
  MatProgressSpinnerModule, MatTooltipModule, MatTabsModule, MatDialogModule, 
  MatMenuModule, MatStepperModule, MatTableModule, MatPaginatorModule,
  MatSortModule } from '@angular/material';


@NgModule({
  exports: [
    MatCheckboxModule,
    MatRadioModule,
    MatSelectModule,
    MatDividerModule,
    MatInputModule,
    MatDatepickerModule, 
    MatNativeDateModule,
    MatIconModule,
    MatButtonModule,
    MatChipsModule,
    MatProgressSpinnerModule,
    MatTooltipModule,
    MatTabsModule,
    MatDialogModule,
    MatMenuModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ]
})
export class MatComponentsModule { }
