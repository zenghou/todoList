import { Component, OnInit, EventEmitter, Input, Output} from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
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
  formModel : FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.formModel = this.fb.group({
      category: new FormControl(),
      tasks: this.fb.array([ this.createTask() ])
    })
  }

  // creates a group of FormControl for better scalabilty when more fields are required 
  createTask(): FormGroup {
    return this.fb.group({
      task: '', // same as FormControl('')
    });
  }

  addTaskRow(): void {
    let tasks = this.formModel.get('tasks') as FormArray;
    tasks.push(this.createTask());
  }

  handleDropdownChange(): void {
    this.showCategoryInput = this._category.value === 'Add a new category' ? true : false;
    if (this.showCategoryInput) {
      this._category.value = ''; // reset field since input is also bound to 'category' FormControl
    }
  }

  saveTask(): void {
    let newTaskObj = {
      'category' : this._category.value,
      'description' : 'This field should be deleted',
      'subtasks' : this._tasks,
      'dueDate' : new Date().toDateString()
    }

    this.eventEmitter.emit({
      'type' : 'newTask',
      'newTask' : newTaskObj
    });
  }

  cancelAddTask(): void {
    this.eventEmitter.emit({
      'type' : 'cancelAddTask'
    });
  }

  // getters
  get _category() {
    return this.formModel.get('category');
  }

  get _tasksFormArray() {
    return this.formModel.get('tasks') as FormArray;
  }

  get _tasks() {
    return this._tasksFormArray.controls.map(control => control.value.task);
  }
}
