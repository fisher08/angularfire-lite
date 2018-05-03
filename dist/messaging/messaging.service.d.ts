import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { AngularFireLiteApp } from '../core.service';
import { messaging } from 'firebase/app';
export declare class AngularFireLiteMessaging {
    private app;
    private platformId;
    private readonly messaging;
    private readonly browser;
    constructor(app: AngularFireLiteApp, platformId: Object);
    instance(): messaging.Messaging;
    token(): Observable<any>;
    tokenRefresh(): Subject<any>;
    requestPermission(): Observable<any>;
    deleteToken(token: string): Observable<any>;
}
