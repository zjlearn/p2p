import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  MatButtonModule, MatToolbarModule, MatIconModule,
  MatCardModule, MatSidenavModule, MatInputModule, MatTooltipModule, MatOptionModule, MatSelectModule, MatStepperModule,
  MatListModule, MatProgressBarModule, MatPaginatorModule
} from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatSidenavModule,
    MatInputModule,
    MatFormFieldModule,
    MatTooltipModule,
    MatOptionModule,
    MatSelectModule,
    MatStepperModule,
    MatListModule,
    MatProgressBarModule,
    MatPaginatorModule

  ],
  exports: [
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatSidenavModule,
    MatInputModule,
    MatFormFieldModule,
    MatTooltipModule,
    MatOptionModule,
    MatSelectModule,
    MatStepperModule,
    MatListModule,
    MatProgressBarModule,
    MatPaginatorModule
  ],
  declarations: []
})
export class MaterialModule {
}
