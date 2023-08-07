import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  templateUrl: './lazy-image.component.html',
})
export class LazyImageComponent implements OnInit {
  @Input()
  public url!: string;

  @Input()
  public alt: string = '';

  public hasLoaded: boolean = false;

  onLoad() {
    // console.log('Image loaded');
    setTimeout(() => {
      this.hasLoaded = true;
    }, 200);
  }

  ngOnInit(): void {
    if(!this.url) throw new Error('URL property is required');
  }
}
