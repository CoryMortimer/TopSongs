import { Component, Input } from '@angular/core';

import { SortService } from '../sort.service';

@Component({
  selector: 'app-sort-options',
  templateUrl: './sort-options.component.html',
  styleUrls: ['./sort-options.component.scss']
})
export class SortOptionsComponent {
  @Input() sortOptions = [];
  @Input() selected = 0;
  constructor(private sortService: SortService) { }

  selectOption(i: number) {
    this.selected = i;
  }

  close() {
    this.sortService.closeComponent(this.selected);
  }
}
