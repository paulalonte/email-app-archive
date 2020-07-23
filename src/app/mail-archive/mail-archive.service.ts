import { IEmail } from './mail-archive-interface';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { EmailData } from './mail-mock';

@Injectable({
    providedIn: 'root'
})

export class EmailService {

    constructor() {
    }

    getEmailList(): Observable<IEmail[]> {
        return of(EmailData);
    }
}
