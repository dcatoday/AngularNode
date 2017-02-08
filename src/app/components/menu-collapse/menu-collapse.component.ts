import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-menu-collapse',
  templateUrl: './menu-collapse.component.html',
  styleUrls: ['./menu-collapse.component.scss']
})
export class MenuCollapseComponent implements OnInit {
  
  @Input('isVisible') isVisible: boolean;
  @Output() isVisibleChange = new EventEmitter<boolean>();

  toggleVisible() {
    this.isVisible = !this.isVisible;
    this.isVisibleChange.emit(this.isVisible);
  }

  ngOnInit() {
  }

}
