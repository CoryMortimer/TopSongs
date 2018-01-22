import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowseComponent } from './browse.component';
import { BrowseService } from './browse.service';
import { CardModule } from '../card/card.module';
import { SearchModule } from '../search/search.module';
import { FilterModule } from '../filter/filter.module';

@NgModule({
  imports: [
    CommonModule,
    CardModule,
    SearchModule,
    FilterModule
  ],
  providers: [BrowseService],
  declarations: [BrowseComponent],
  exports: [BrowseComponent]
})
export class BrowseModule { }
