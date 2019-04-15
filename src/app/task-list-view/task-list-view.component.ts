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

  checkBoxHandler(event) {
    if (event.type === 'mouseleave' || event.type === 'click') {
      $(event.target).removeClass('hover');
    } else if (event.type === 'mouseenter') {
      $(event.target).addClass('hover');
    } else if (event.type === 'click') {
      // toggle fa icon here
    }
  }

  menuHandler(event, index, task): void {
    let type = $(event.target).val();
    this.eventEmitter.emit({
      'type' : type,
      'index' : index,
      'task' : task
    });
  }

  addTaskClickHandler(): void {
    this.eventEmitter.emit({
      'type': 'addTaskButtonClick'
    });
  }

  markAsComplete(subtaskId, event): void {
    $('#' + subtaskId).toggleClass('strike');
    let $target = $(event.target);
    let $subtaskContainers = $target.parents('.subtask-container').siblings('.subtask-container');
    let completed = true;
    // check all subtasks to see if they're striked out
    $subtaskContainers.each(function(i, elem) {
      if (!$(elem).find('.subtask').hasClass('strike')) {
        completed = false;
      }
    });
    if (completed) {
      let $taskItem = $target.parents('.task-item');
      // emit event after slide up to show animation
      $taskItem.slideUp(1000, () => {
        this.eventEmitter.emit({
          'type' : 'mark-as-complete',
          'index' : $taskItem.attr('id')
        });
      });
    }
  }
}
