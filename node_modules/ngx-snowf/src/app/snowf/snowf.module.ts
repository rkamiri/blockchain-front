import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common';
import { SnowfComponent } from './snowf.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        SnowfComponent
    ],
    exports: [
        SnowfComponent
    ]
})
export class SnowfModule {}