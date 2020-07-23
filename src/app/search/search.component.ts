import { Component, Output, EventEmitter, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  @Output() searchChange = new EventEmitter<string>();
  @ViewChild('inputSearch', { static: true }) inputSearch: HTMLInputElement;

  searchValue: any;

  constructor() { }

  onDateChange(event: any) {
    this.searchValue = event.target.value;
    this.searchChange.emit(this.searchValue);
  }

  onSearchClick() {
    const inputValue = (this.inputSearch as any).nativeElement.value;
    this.searchChange.emit(inputValue);
  }

}
