import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WidgetQuickValueCenterComponent } from './widget-quick-value-center.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { IconModule } from '@visurel/iconify-angular';
import { MatLegacyTooltipModule as MatTooltipModule } from '@angular/material/legacy-tooltip';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { ShareBottomSheetModule } from '../../share-bottom-sheet/share-bottom-sheet.module';


@NgModule({
  declarations: [WidgetQuickValueCenterComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatIconModule,
    IconModule,
    MatTooltipModule,
    MatButtonModule,
    ShareBottomSheetModule
  ],
  exports: [WidgetQuickValueCenterComponent]
})
export class WidgetQuickValueCenterModule {
}

