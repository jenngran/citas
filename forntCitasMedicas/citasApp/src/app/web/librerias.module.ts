import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

//COMPONENTES
//materials
import { ReactiveFormsModule } from '@angular/forms';

//iconos
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatStepperModule } from '@angular/material/stepper';
import { MatDividerModule } from '@angular/material/divider';
import { MatSelectModule } from '@angular/material/select';
import { MatListModule } from "@angular/material/list";
import { MatAutocompleteModule } from '@angular/material/autocomplete';

import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from "@angular/material/core";
import { MatTabsModule } from '@angular/material/tabs';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { MatExpansionModule } from "@angular/material/expansion";
import { MatChipsModule } from "@angular/material/chips";
import { MatDialogModule } from "@angular/material/dialog";
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatRadioModule } from "@angular/material/radio";
import { MatBadgeModule } from "@angular/material/badge";
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [

  ],
  imports: [
    FormsModule,
    FlexLayoutModule,
    MatProgressBarModule,
    //Angular Material
    MatListModule,
    MatRadioModule,
    MatIconModule,

    MatBadgeModule,

    MatChipsModule,
    MatCardModule,
    ReactiveFormsModule,
    MatInputModule,

    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatTooltipModule,
    MatButtonModule,
    MatCheckboxModule,
    MatStepperModule,
    MatDividerModule,
    MatPaginatorModule,
    MatTableModule,
    MatSlideToggleModule,
    MatSortModule,
    MatMenuModule,
    MatButtonToggleModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTabsModule,
    MatAutocompleteModule,
    CdkAccordionModule,
    MatExpansionModule,
    MatDialogModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    RouterModule,
    MatRadioModule,
    MatProgressBarModule,
    //Angular Material
    MatListModule,

    MatIconModule,
    MatChipsModule,
    MatCardModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSnackBarModule,
    MatBadgeModule,
    MatProgressSpinnerModule,
    MatTooltipModule,
    MatButtonModule,
    MatCheckboxModule,
    MatStepperModule,
    MatDividerModule,
    MatPaginatorModule,
    MatTableModule,
    MatSlideToggleModule,
    MatSortModule,
    MatMenuModule,
    MatButtonToggleModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTabsModule,
    MatAutocompleteModule,
    CdkAccordionModule,
    MatExpansionModule,
    MatDialogModule,
  ]
})
export class libreriasModule { }
