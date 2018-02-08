import { NgModule } from '@angular/core';
import { MatCheckboxModule, MatRadioModule, MatSelectModule,
  MatDividerModule, MatInputModule, MatDatepickerModule,
  MatNativeDateModule, MatIconModule, MatButtonModule, MatChipsModule,
  MatProgressSpinnerModule, MatTooltipModule, MatTabsModule, MatDialogModule} from '@angular/material';

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
    MatDialogModule
  ]
})
export class MatComponentsModule { }
