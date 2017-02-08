import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-image-loader',
  templateUrl: './image-loader.component.html',
  styleUrls: ['./image-loader.component.scss']
})
export class ImageLoaderComponent implements OnInit {

  constructor() { }

  @Input('src') src: string;
  @Input('min') min: string;
  @Input('title') title: string;

  imageLoaded(e) {
    e.currentTarget.classList = "show";
  }

  ngOnInit() {
  }

}
