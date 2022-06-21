import { Pad } from './pad/pad';
import { NgModule } from '@angular/core';
import { ServoyPublicModule } from '@servoy/public';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
		Pad,
    ],
    providers: [],
    imports: [
      ServoyPublicModule,
      CommonModule,
      FormsModule
    ],
    exports: [
		Pad, 
      ]
})
export class svysignatureModule {}