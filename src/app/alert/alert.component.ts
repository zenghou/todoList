import { Input, Component, EventEmitter, Output } from '@angular/core';

interface Alert {
  type: string;
  message: string;
}

@Component({
  selector: 'ngbd-alert-closeable',
  template: `<ngb-alert style="margin-bottom: 0px" [type]="alert.type" (close)="close(alert)">{{ alert.message }}</ngb-alert>`
})
export class NgbdAlertCloseable {

  @Input('bannerType') bannerType: String;
  @Output() eventEmitter = new EventEmitter<Object>();

  alert: Alert;

  constructor() {
  }

  // on change listens to changes in @Input
  // some how the update to bannerType is not synchronous, so let's wait for the value to be updated first
  ngOnChanges() {
    if (this.bannerType) {
      this.setBanner();
    }
  }

  getAlert(bannerType) {
    if (bannerType === 'task-completed') {
      return {
        type: 'success',
        message: 'Congratulations on completing a task!'
      }
    } else if (bannerType === 'task-deleted') {
      return {
        type: 'info',
        message: 'Task successfully deleted!',
      }
    } else if (bannerType === 'invalid-fields') {
      return {
        type: 'danger',
        message: 'Please ensure that the fields are correctly filled up.',
      }
    } else if (bannerType === 'task-moved') {
      return {
        type: 'info',
        message: 'Task successfully moved!',
      }
    }
  }

  close(alert: Alert) {
    this.alert = null;
    this.eventEmitter.emit({
      'type': 'bannerClosed'
    });
  }

  setBanner() {
    this.alert = this.getAlert(this.bannerType);
  }
}
