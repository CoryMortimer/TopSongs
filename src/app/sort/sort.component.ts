import { Component, Input, Output, EventEmitter } from '@angular/core';

import { SortService } from './sort.service';
import { SortOptionsComponent } from './sort-options/sort-options.component';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.scss']
})
export class SortComponent {
  @Input() sortOptions = [];
  @Input() option = 0;
  @Output() optionSelected = new EventEmitter<number>();

  constructor(private sortService: SortService) { }

  openSortOptions() {
    const options = {
      sortOptions: this.sortOptions,
      selected: this.option
    };
    this.sortService.openComponent(SortOptionsComponent, options)
      .subscribe(option => {
        this.option = option;
        this.optionSelected.emit(option);
      });
  }
}
