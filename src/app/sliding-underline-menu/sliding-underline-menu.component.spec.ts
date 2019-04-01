import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidingUnderlineMenuComponent } from './sliding-underline-menu.component';

describe('SlidingUnderlineMenuComponent', () => {
  let component: SlidingUnderlineMenuComponent;
  let fixture: ComponentFixture<SlidingUnderlineMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlidingUnderlineMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlidingUnderlineMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
