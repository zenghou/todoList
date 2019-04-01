import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'todoList';
  menuItems: string[];
  currSelected: string;

  ngOnInit() {
    this.menuItems = ['Incomplete', 'Complete'];
    this.currSelected = this.menuItems[0];
  }

  ngAfterViewInit() {
  }

  onSelected(selectedItem) {
    this.currSelected = selectedItem;
  }
}
