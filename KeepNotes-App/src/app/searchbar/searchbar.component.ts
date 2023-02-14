import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent {
  searchefor :string|any;
  @Output()
  searchData:EventEmitter<any> = new EventEmitter<any>();


  searchNotes(){
    this.searchData.emit(this.searchefor);
    this.searchefor=""
  }

}
