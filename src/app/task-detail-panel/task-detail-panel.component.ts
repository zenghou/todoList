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
  formModel: Object = {};

  constructor() { }

  ngOnInit() {
  }

  saveTask() {
    let category = this.showCategoryInput ? this.formModel.newCategory : this.formModel.category;
    let description = this.formModel.description;
    let subtasks = this.formModel.subtasks;

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

  handleDropdownChange() {
    this.showCategoryInput = this.formModel.category === 'Add a new category' ? true : false;
  }
}
