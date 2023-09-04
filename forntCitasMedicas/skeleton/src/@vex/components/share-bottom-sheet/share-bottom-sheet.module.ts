import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareBottomSheetComponent } from './share-bottom-sheet.component';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatLegacyListModule as MatListModule } from '@angular/material/legacy-list';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { IconModule } from '@visurel/iconify-angular';


@NgModule({
    declarations: [ShareBottomSheetComponent],
    imports: [
        CommonModule,
        MatBottomSheetModule,
        MatListModule,
        RouterModule,
        MatIconModule,
        IconModule
    ],
    exports: [
        MatBottomSheetModule
    ]
})
export class ShareBottomSheetModule {
}
