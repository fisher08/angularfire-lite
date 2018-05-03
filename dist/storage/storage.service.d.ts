import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { AngularFireLiteApp } from '../core.service';
export declare class AngularFireLiteStorage {
    private app;
    private platformId;
    private readonly storage;
    private readonly browser;
    constructor(app: AngularFireLiteApp, platformId: Object);
    upload(ref: string, file: File | Blob | Uint8Array | any, metadata?: Object | any): Observable<any>;
    uploadString(ref: string, string: string): Observable<any>;
    download(ref: string): Observable<any>;
    remove(ref: any): Observable<any>;
    getMetadata(ref: string): Subject<any>;
    updateMetadata(ref: string, metadata: Object | any): Observable<any>;
    deleteMetadata(ref: string): Observable<any>;
    private child(ref);
}
