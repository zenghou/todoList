import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-task-list-view',
  templateUrl: './task-list-view.component.html',
  styleUrls: ['./task-list-view.component.scss']
})
export class TaskListViewComponent implements OnInit {

  @Input('tasks') tasks: Object[]
  @Output() isClickOutput = new EventEmitter<Object>();

  constructor() { }

  ngOnInit() {
  }

  addTaskHandler() {
    this.isClickOutput.emit({
      'type': 'addTask'
    });
  }
}
