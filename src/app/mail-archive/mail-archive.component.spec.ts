import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MailArchiveComponent } from './mail-archive.component';

describe('MailArchiveComponent', () => {
  let component: MailArchiveComponent;
  let fixture: ComponentFixture<MailArchiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MailArchiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MailArchiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
