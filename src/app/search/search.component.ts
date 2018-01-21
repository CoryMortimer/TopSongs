import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  private value: string;
  @Output() newValue = new EventEmitter<string>();

  get inputValue(): string {
    return this.value;
  }

  set inputValue(v: string) {
    this.value = v;
    this.newValue.emit(v);
  }
}
