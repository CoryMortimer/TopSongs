import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SortComponent } from './sort.component';
import { SortService } from './sort.service';
import { SortOptionsComponent } from './sort-options/sort-options.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SortComponent, SortOptionsComponent],
  exports: [SortComponent],
  providers: [SortService],
  entryComponents: [SortOptionsComponent]
})
export class SortModule { }
