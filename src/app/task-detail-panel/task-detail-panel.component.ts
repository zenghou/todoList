import { Component, OnInit, EventEmitter, Input, Output} from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-task-detail-panel',
  templateUrl: './task-detail-panel.component.html',
  styleUrls: ['./task-detail-panel.component.scss']
})
export class TaskDetailPanelComponent implements OnInit {
  @Input('categories') categories: string[];
  @Output() eventEmitter = new EventEmitter<Object>();

  showCategoryInput: boolean;
  form: FormGroup;
  taskObj: Object = {};

  constructor() { }

  ngOnInit() {
  }

  saveTask() {
    let category = this.showCategoryInput ? $('#categoryInput').val() : $('select').val();
    let description = $('#description').val();
    let subtasks = $('#subtasks').val();

    let obj = {
      'category' : category,
      'description' : description,
      'subtasks' : [subtasks],
      'dueDate' : new Date().toDateString()
    }

    this.eventEmitter.emit({
      'type' : 'newTask',
      'newTask' : obj
    });
  }

  cancelAddTask() {
    this.eventEmitter.emit({
      'type' : 'cancelAddTask'
    });
  }

  handleDropdownChange(event) {
    this.showCategoryInput = event.target.value === 'Add a new category' ? true : false;
  }

  changeDropdown() {
    console.log(this.taskObj.category);
  }

}
