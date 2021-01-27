import { Component, ElementRef, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'resume';
  constructor(public panel: ElementRef<any>) { }

  ngOnInit() {

  }

  onActivate(event) {
    // this.panel.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' });
    // console.log(event)
  }

}
