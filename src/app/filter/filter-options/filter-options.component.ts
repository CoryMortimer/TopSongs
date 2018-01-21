import { Component, Input } from '@angular/core';

import { FilterService } from '../filter.service';

@Component({
  selector: 'app-filter-options',
  templateUrl: './filter-options.component.html',
  styleUrls: ['./filter-options.component.scss']
})
export class FilterOptionsComponent {
  @Input() filterOptions = [];
  @Input() selected = 0;
  constructor(private filterService: FilterService) { }

  selectOption(i: number) {
    this.selected = i;
  }

  close() {
    this.filterService.closeComponent(this.selected);
  }
}
