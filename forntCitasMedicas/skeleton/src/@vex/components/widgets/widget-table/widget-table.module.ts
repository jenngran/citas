import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WidgetTableComponent } from './widget-table.component';
import { MatLegacyTableModule as MatTableModule } from '@angular/material/legacy-table';
import { MatLegacyPaginatorModule as MatPaginatorModule } from '@angular/material/legacy-paginator';
import { MatSortModule } from '@angular/material/sort';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatLegacyTooltipModule as MatTooltipModule } from '@angular/material/legacy-tooltip';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatIconModule } from '@angular/material/icon';
import { IconModule } from '@visurel/iconify-angular';


@NgModule({
  declarations: [WidgetTableComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    FlexLayoutModule,
    MatTooltipModule,
    MatButtonModule,
    MatIconModule,
    IconModule
  ],
  exports: [WidgetTableComponent]
})
export class WidgetTableModule {
}
