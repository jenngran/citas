import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarSearchComponent } from './toolbar-search.component';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatIconModule } from '@angular/material/icon';
import { IconModule } from '@visurel/iconify-angular';


@NgModule({
  declarations: [ToolbarSearchComponent],
  imports: [
    CommonModule,
    MatInputModule,
    FlexLayoutModule,
    MatButtonModule,
    MatIconModule,
    IconModule
  ],
  exports: [ToolbarSearchComponent]
})
export class ToolbarSearchModule {
}
