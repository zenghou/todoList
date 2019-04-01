import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-sliding-underline-menu',
  templateUrl: './sliding-underline-menu.component.html',
  styleUrls: ['./sliding-underline-menu.component.scss']
})
export class SlidingUnderlineMenuComponent implements OnInit {

  @Input('menuItems') menuItems: string[];
  @Output() currSelected = new EventEmitter<Object>();

  constructor() {
  }

  ngOnInit() {
  }

  menuItemSelected(selectedItem: string) {
    $('.selected').removeClass('selected');
    $('#' + selectedItem).addClass('selected');
    this.currSelected.emit({
      'type' : 'selectMenuItem',
      'selected' : selectedItem
    });
  }  
}
