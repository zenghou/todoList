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
  completedTasks: Object[]; // list of all tasks to be displayed
  existingFormObj: Object;

  ngOnInit() {
    this.menuItems = ['Incomplete', 'Complete'];
    this.currSelected = this.menuItems[0];
    this.showTaskDetailPanel = false;
    this.tasks = [];
    this.completedTasks = [];
    this.categories = [];
    this.existingFormObj = null;

    //temp
    this.tasks.push({
      'category': 'Category 1',
      'newCategory': 'New Category 1',
      // 'subtasks': ['Subtask 1', 'Subtask 2', 'Subtask 3', 'Subtask 4'],
      'subtasks': ['Subtask 1', 'Subtask 2'],
      'dateAdded': new Date().toDateString()
    });
  }

  ngAfterViewInit() {
  }

  eventHandler(event) {
    if (event.type === 'selectMenuItem') {
      this.onSelected(event.selected);
    } else if (event.type === 'addTaskButtonClick') {
      this.showTaskDetailPanel = true;
    } else if (event.type === 'addNewTask') {
      let taskObj = event.task;
      let newCategory = taskObj.newCategory; // will be null for existing categories

      if (newCategory && !this.categories.includes(newCategory)) {
        this.categories.push(newCategory);
        taskObj.category = taskObj.newCategory; // category will be null, so let's set it to new category
      }
      this.tasks.push(taskObj); // add new taskObj
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
      this.existingFormObj['index'] = event.index;
    } else if (event.type === 'updateTask') {
      let index = event['index'];
      this.tasks[index]['subtasks'] = event.task.subtasks;
      this.showTaskDetailPanel = false;
      this.existingFormObj = null;
    } else if (event.type === 'mark-as-complete') {
      this.tasks = this.tasks.filter((task, index) => {
        if (index == event['index']) {
          this.completedTasks.push(task);
          return false;
        }
        return true;
      });
    }
  }

  onSelected(selectedItem) {
    this.currSelected = selectedItem;
    if (selectedItem === 'Complete') {
      this.showTaskDetailPanel = false;
    }
  }
}
