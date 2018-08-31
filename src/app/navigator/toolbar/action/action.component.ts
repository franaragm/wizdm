import { Component, Input, Output, EventEmitter } from '@angular/core';
import { toolbarAction } from '../toolbar.service'; 
import { $animations } from './action.animations';

@Component({
  selector: 'wm-toolbar-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.scss'],
  animations: $animations
})
export class ActionComponent {

  constructor() { }

  @Input() action: toolbarAction;

  // Emits when action is activated
  @Output() activate = new EventEmitter<string>();

  // Set to true to render a menu item
  @Input() menu = false;
}