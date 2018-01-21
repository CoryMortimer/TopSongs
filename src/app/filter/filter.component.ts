import { Component, Input } from '@angular/core';

import { FilterService } from './filter.service';
import { FilterOptionsComponent } from './filter-options/filter-options.component';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {
  @Input() filterOptions = [];
  @Input() option = 0;

  constructor(private filterService: FilterService) { }

  openFilterOptions() {
    const options = {
      filterOptions: this.filterOptions,
      selected: this.option
    };
    this.filterService.openComponent(FilterOptionsComponent, options)
      .subscribe(option => this.option = option);
  }
}
