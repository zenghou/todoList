import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

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

}
