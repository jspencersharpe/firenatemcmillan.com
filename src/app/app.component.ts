import { Component, ViewContainerRef } from '@angular/core';

import '../style/app.scss';

@Component({
  selector: 'app',
  templateUrl: './app.component.pug'
})

export class AppComponent {
  animate = false;
  constructor(private viewContainerRef: ViewContainerRef,) {

    this.viewContainerRef = viewContainerRef;
  }
}
