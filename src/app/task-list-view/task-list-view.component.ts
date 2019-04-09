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

  hoverHandler(event) {
    console.log(event);
    if (event.type === 'mouseleave' || event.type === 'click') {
      $(event.target).removeClass('hover');
    } else if (event.type === 'mouseenter') {
      $(event.target).addClass('hover');
    }
  }

  addTaskHandler(): void {
    this.isClickOutput.emit({
      'type': 'addTask'
    });
  }

  markAsComplete(subtaskId, event): void {
    $('#' + subtaskId).toggleClass('strike');
    console.log(event);
  }
}
