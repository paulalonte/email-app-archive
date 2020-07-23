import { IEmail } from './../mail-archive/mail-archive-interface';
import { Component, Input, ViewChild, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-email-detail',
  templateUrl: './email-detail.component.html',
  styleUrls: ['./email-detail.component.scss']
})
export class EmailDetailComponent implements OnInit {

  @ViewChild('mainEmail', { static: true }) mainEmail: HTMLHtmlElement;
  @Output() backTriggered = new EventEmitter<boolean>();
  @Input() emailDetail: IEmail;

  constructor() { }

  ngOnInit(): void { }

  onBackClick() {
    this.backTriggered.emit(true);
  }

}
