import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecondsToDurationPipe } from './seconds-to-duration.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SecondsToDurationPipe],
  exports: [SecondsToDurationPipe]
})
export class SharedModule { }
