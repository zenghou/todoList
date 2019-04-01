import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskDetailPanelComponent } from './task-detail-panel.component';

describe('TaskDetailPanelComponent', () => {
  let component: TaskDetailPanelComponent;
  let fixture: ComponentFixture<TaskDetailPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskDetailPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskDetailPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
