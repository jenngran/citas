import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigPanelComponent } from './config-panel.component';
import { ConfigPanelToggleComponent } from './config-panel-toggle/config-panel-toggle.component';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatIconModule } from '@angular/material/icon';
import { IconModule } from '@visurel/iconify-angular';
import { MatLegacyRadioModule as MatRadioModule } from '@angular/material/legacy-radio';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatLegacySlideToggleModule as MatSlideToggleModule } from '@angular/material/legacy-slide-toggle';
import { MatRippleModule } from '@angular/material/core';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    IconModule,
    MatRadioModule,
    FlexLayoutModule,
    MatSlideToggleModule,
    MatRippleModule
  ],
  declarations: [ConfigPanelComponent, ConfigPanelToggleComponent],
  exports: [ConfigPanelComponent, ConfigPanelToggleComponent]
})
export class ConfigPanelModule {
}
