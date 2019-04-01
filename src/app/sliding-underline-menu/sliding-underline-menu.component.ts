import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-sliding-underline-menu',
  templateUrl: './sliding-underline-menu.component.html',
  styleUrls: ['./sliding-underline-menu.component.scss']
})
export class SlidingUnderlineMenuComponent implements OnInit {

  @Input('menuItems') menuItems: string[];
  @Output() currSelected = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit() {
  }

  menuItemSelected(event: string) {
    $('.selected').removeClass('selected');
    $('#' + event).addClass('selected');
    this.currSelected.emit(event);
  }  
}
