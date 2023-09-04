import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MegaMenuComponent } from './mega-menu.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { IconModule } from '@visurel/iconify-angular';
import { RouterModule } from '@angular/router';


@NgModule({
    declarations: [MegaMenuComponent],
    imports: [
        CommonModule,
        FlexLayoutModule,
        MatButtonModule,
        IconModule,
        RouterModule
    ],
    exports: [MegaMenuComponent]
})
export class MegaMenuModule { }
