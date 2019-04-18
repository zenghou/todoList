import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-completed-task-list-view',
  templateUrl: './completed-task-list-view.component.html',
  styleUrls: ['./completed-task-list-view.component.scss']
})
export class CompletedTaskListViewComponent implements OnInit {

  @Input('completedTasks') tasks: Object[]
  @Output() eventEmitter = new EventEmitter<Object>();

  constructor() { }

  ngOnInit() {
  }

  menuHandler(event, index, task): void {
    let type = $(event.target).val();
    this.eventEmitter.emit({
      'type' : type,
      'index' : index,
      'task' : task
    });
  }
}
