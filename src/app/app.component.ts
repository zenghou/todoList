import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'todoList';
  menuItems: string[]; // menu item used in dropdown
  currSelected: string; // currently selected tab
  showTaskDetailPanel: boolean; // flag to determine if detail panel should be shown
  categories: string[]; // cached list of categories
  tasks: Object[]; // list of all tasks to be displayed

  ngOnInit() {
    this.menuItems = ['Incomplete', 'Complete'];
    this.currSelected = this.menuItems[0];
    this.showTaskDetailPanel = false;
    this.tasks = [];
    this.categories = [];
  }

  ngAfterViewInit() {
  }

  eventHandler(event) {
    if (event.type === 'selectMenuItem') {
      this.onSelected(event.selected);
    } else if (event.type === 'addTask') {
      this.showTaskDetailPanel = true;
    } else if (event.type === 'newTask') {
      let taskObj = event.newTask;
      this.tasks.push(taskObj);
      let newCategory = taskObj.newCategory;
      if (newCategory && !this.categories.includes(newCategory)) {
        this.categories.push(newCategory);
      }
      this.showTaskDetailPanel = false;
    } else if (event.type === 'cancelAddTask') {
      this.showTaskDetailPanel = false;
    }
  }

  onSelected(selectedItem) {
    this.currSelected = selectedItem;
    if (selectedItem === 'Complete') {
      this.showTaskDetailPanel = false;
    }
  }
}
