import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowseComponent } from './browse.component';
import { BrowseService } from './browse.service';
import { CardModule } from '../card/card.module';
import { SearchModule } from '../search/search.module';
import { SortModule } from '../sort/sort.module';

@NgModule({
  imports: [
    CommonModule,
    CardModule,
    SearchModule,
    SortModule
  ],
  providers: [BrowseService],
  declarations: [BrowseComponent],
  exports: [BrowseComponent]
})
export class BrowseModule { }
