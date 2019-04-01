import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedTaskListViewComponent } from './completed-task-list-view.component';

describe('CompletedTaskListViewComponent', () => {
  let component: CompletedTaskListViewComponent;
  let fixture: ComponentFixture<CompletedTaskListViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompletedTaskListViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompletedTaskListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
