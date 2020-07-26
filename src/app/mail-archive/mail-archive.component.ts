import { EmailService } from './mail-archive.service';
import { IEmail } from './mail-archive-interface';
import { Component, OnInit, HostListener, Input, ViewChild, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-mail-archive',
  templateUrl: './mail-archive.component.html',
  styleUrls: ['./mail-archive.component.scss']
})
export class MailArchiveComponent implements OnInit {
  @Input() totalCount: string;
  @ViewChild('emailList', { static: true }) emailList: HTMLElement;

  innerWidth: number;
  showUpIcon = false;
  arrayEmails: IEmail[];
  searchValue: string;
  totalResults: number;

  emailDetail: IEmail;

  isClosed: boolean;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.innerWidth = window.innerWidth;
    this.checkIfShowUpIcon();
  }

  constructor(private emailService: EmailService) { }

  ngOnInit(): void {
    // get the width on init when loading the web page in a mobile or tablet
    this.innerWidth = window.innerWidth;
    this.checkIfShowUpIcon();

    this.emailService.getEmailList().subscribe(responseData => {
      this.arrayEmails = responseData;
      this.totalResults = this.arrayEmails.length;
    });
  }

  fromClick(): void {
    this.arrayEmails.sort(this.compareFrom);
  }

  compareFrom(a: any, b: any) {
    if (a.from < b.from) { return -1; }
    if (a.from > b.from) { return 1; }
    return 0;
  }

  checkIfShowUpIcon() {
    this.showUpIcon = (this.innerWidth <= 668) ? true : false;
  }

  onSearchChange(event: string) {
    this.searchValue = event;
    if (this.searchValue !== '') {
      setTimeout(() => {
        this.totalResults = (this.emailList as any).nativeElement.childElementCount;
      }, 200);
    } else {
      this.totalResults = this.arrayEmails.length;
    }
  }

  onEmailListClick(email: IEmail) {
    this.emailDetail = email;
    this.isClosed = false;
  }

  onBackTriggered($event: boolean) {
    this.isClosed = $event;
  }

}
