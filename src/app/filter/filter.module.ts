import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilterComponent } from './filter.component';
import { FilterService } from './filter.service';
import { FilterOptionsComponent } from './filter-options/filter-options.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FilterComponent, FilterOptionsComponent],
  exports: [FilterComponent],
  providers: [FilterService],
  entryComponents: [FilterOptionsComponent]
})
export class FilterModule { }
