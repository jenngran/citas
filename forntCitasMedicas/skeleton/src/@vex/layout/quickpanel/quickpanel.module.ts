import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuickpanelComponent } from './quickpanel.component';
import { MatLegacyListModule as MatListModule } from '@angular/material/legacy-list';
import { MatLegacyProgressBarModule as MatProgressBarModule } from '@angular/material/legacy-progress-bar';
import { RouterModule } from '@angular/router';
import { MatRippleModule } from '@angular/material/core';


@NgModule({
  declarations: [QuickpanelComponent],
  imports: [
    CommonModule,
    MatListModule,
    MatProgressBarModule,
    RouterModule,
    MatRippleModule
  ],
  exports: [QuickpanelComponent]
})
export class QuickpanelModule {
}
