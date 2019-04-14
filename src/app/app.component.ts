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
  existingFormObj: Object;

  ngOnInit() {
    this.menuItems = ['Incomplete', 'Complete'];
    this.currSelected = this.menuItems[0];
    this.showTaskDetailPanel = false;
    this.tasks = [];
    this.categories = [];
    this.existingFormObj = null;

    //temp
    // this.tasks.push({
    //   'category': 'Category 1',
    //   'newCategory': 'New Category 1',
    //   'subtasks': ['Subtask 1', 'Subtask 2'],
    //   'dueDate': new Date().toDateString()
    // });
  }

  ngAfterViewInit() {
  }

  eventHandler(event) {
    if (event.type === 'selectMenuItem') {
      this.onSelected(event.selected);
    } else if (event.type === 'addTask') {
      this.showTaskDetailPanel = true;
    } else if (event.type === 'newTask') {
      let taskObj = event.task;
      let newCategory = taskObj.newCategory;
      if (newCategory && !this.categories.includes(newCategory)) {
        this.categories.push(newCategory);
        taskObj.category = taskObj.newCategory; // would be marked as 'Add New Category' otherwise
      }
      this.tasks.push(taskObj);
      this.showTaskDetailPanel = false;
    } else if (event.type === 'cancelAddTask') {
      this.showTaskDetailPanel = false;
      this.existingFormObj = null;
    } else if (event.type === 'delete') {
      // remove category for now
      this.categories = this.categories.filter(category => category != event.task.category);
      this.tasks = this.tasks.filter((elem, index) => index !== event.index);
    } else if (event.type === 'edit') {
      this.showTaskDetailPanel = true;
      this.existingFormObj = event.task;
    } else if (event.type === 'updateTask') {

      //TODO: need to find a better way to map to existing task
      this.tasks.map(task => {
        if (task.category === event.task.category) {
          task.subtasks = event.task.subtasks;
        }
      });
      this.showTaskDetailPanel = false;
      this.existingFormObj = null;
    }
  }

  onSelected(selectedItem) {
    this.currSelected = selectedItem;
    if (selectedItem === 'Complete') {
      this.showTaskDetailPanel = false;
    }
  }
}
