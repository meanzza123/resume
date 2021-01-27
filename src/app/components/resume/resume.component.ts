import { Component, ElementRef, OnInit } from '@angular/core';


@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {

  constructor(public panel: ElementRef<any>) { }

  ngOnInit() {
    this.panel.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' });
  }

}
