import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-task-list-view',
  templateUrl: './task-list-view.component.html',
  styleUrls: ['./task-list-view.component.scss']
})
export class TaskListViewComponent implements OnInit {

  @Input('tasks') tasks: Object[]
  @Output() eventEmitter = new EventEmitter<Object>();

  constructor() { }

  ngOnInit() {
  }

  hoverHandler(event) {
    console.log(event);
    if (event.type === 'mouseleave' || event.type === 'click') {
      $(event.target).removeClass('hover');
    } else if (event.type === 'mouseenter') {
      $(event.target).addClass('hover');
    }
  }

  menuHandler(event, index, task): void {
    let type = $(event.target).val();
    this.eventEmitter.emit({
      'type' : type.toLowerCase(),
      'index' : index,
      'task' : task
    });
  }

  addTaskHandler(): void {
    this.eventEmitter.emit({
      'type': 'addTask'
    });
  }

  markAsComplete(subtaskId, event): void {
    $('#' + subtaskId).toggleClass('strike');
    console.log(event);
  }
}
