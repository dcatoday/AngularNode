import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-menu-collapse',
  templateUrl: './menu-collapse.component.html',
  styleUrls: ['./menu-collapse.component.scss']
})
export class MenuCollapseComponent implements OnInit {
  
  @Input('isVisible') isVisible: boolean = false;
  @Input('alwaysCollapse') alwaysCollapse: boolean = false;
  @Input('top') top: boolean = false;
  @Input('bottom') bottom: boolean = false;
  @Input('right') right: boolean = false;
  @Input('hideToggle') hideToggle: boolean = false;
  @Output() isVisibleChange = new EventEmitter<boolean>();

  toggleVisible() {
    this.isVisible = !this.isVisible;
    this.isVisibleChange.emit(this.isVisible);
  }

  ngOnInit() {
  }

}
