import { Component, ElementRef, OnInit } from '@angular/core';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(public panel: ElementRef<any>) { }

  ngOnInit() {
    this.panel.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' });
  }

}
