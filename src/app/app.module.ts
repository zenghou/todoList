import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from "@angular/forms";
import * as $ from 'jquery';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SlidingUnderlineMenuComponent } from './sliding-underline-menu/sliding-underline-menu.component';
import { TaskListViewComponent } from './task-list-view/task-list-view.component';
import { CompletedTaskListViewComponent } from './completed-task-list-view/completed-task-list-view.component';
import { TaskDetailPanelComponent } from './task-detail-panel/task-detail-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    SlidingUnderlineMenuComponent,
    TaskListViewComponent,
    CompletedTaskListViewComponent,
    TaskDetailPanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
