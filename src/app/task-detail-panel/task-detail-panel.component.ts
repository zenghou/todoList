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
  @Input('existingFormObj') existingFormObj;
  @Output() eventEmitter = new EventEmitter<Object>();

  showCategoryInput: boolean;
  formModel : FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    if (!this.existingFormObj) {
      this.formModel = this.fb.group({
        category: new FormControl(),
        newCategory: new FormControl(),
        tasks: this.fb.array([ this.createTask(null) ])
      });
    } else {
      let subTasks = [];
      this.existingFormObj.subtasks.forEach(task => subTasks.push(this.createTask(task)));
      this.formModel = this.fb.group({
        category: new FormControl(this.existingFormObj.category),
        newCategory: new FormControl(),
        tasks: this.fb.array(subTasks)
      });
    }
  }

  // creates a group of FormControl for better scalabilty when more fields are required 
  createTask(t): FormGroup {
    return this.fb.group({
      task: t ? t : '', // same as FormControl('')
    });
  }

  addTaskRow(): void {
    let tasks = this.formModel.get('tasks') as FormArray;
    tasks.push(this.createTask());
  }

  removeTaskRow(rowIndex): void {
    let tasks = this.formModel.get('tasks') as FormArray;
    tasks.removeAt(rowIndex);
  }

  handleDropdownChange(): void {
    this.showCategoryInput = this._category.value === 'Add a new category' ? true : false;
    if (this.showCategoryInput) {
      // this._category.reset(); // reset field since input is also bound to 'category' FormControl
    }
  }

  saveTask(): void {
    let taskObj = {
      'category': this._category.value,
      'newCategory': this._newCategory.value,
      'subtasks': this._tasks,
      'dueDate': new Date().toDateString()
    }

    this.eventEmitter.emit({
      'type' : this.existingFormObj ? 'updateTask' : 'newTask',
      'task' : taskObj
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

  get _newCategory() {
    return this.formModel.get('newCategory');
  }

  get _tasksFormArray() {
    return this.formModel.get('tasks') as FormArray;
  }

  get _tasks() {
    return this._tasksFormArray.controls.map(control => control.value.task);
  }
}
