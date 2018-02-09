import { Injectable } from '@angular/core';
import { Http, Response, RequestOptionsArgs, RequestMethod, Headers } from '@angular/http';

import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import { Observer } from 'rxjs/Observer';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


// Implementing a Retry-Circuit breaker policy 
// is pending to do for the SPA app
@Injectable()
export class DataService {
    constructor(private http: Http) { }

    get(url: string, params?: any): Observable<Response> {
        let options: RequestOptionsArgs = {};

        return this.http.get(url, options).map(
            (res: Response) => {
            return res;
        }).catch(this.handleError);
    }

    postWithId(url: string, data: any, params?: any): Observable<Response> {
        return this.doPost(url, data, true, params);
    }

    post(url: string, data: any, params?: any): Observable<Response> {
        return this.doPost(url, data, false, params);
    }

    putWithId(url: string, data: any, params?: any): Observable<Response> {
        return this.doPut(url, data, true, params);
    }

    private doPost(url: string, data: any, needId: boolean, params?: any): Observable<Response> {
        let options: RequestOptionsArgs = {};

        return this.http.post(url, data, options).map(
            (res: Response) => {
                return res;
            }).catch(this.handleError);
    }

    private doPut(url: string, data: any, needId: boolean, params?: any): Observable<Response> {
        let options: RequestOptionsArgs = {};

        options.headers = new Headers();
     
        return this.http.put(url, data, options).map(
            (res: Response) => {
                return res;
            }).catch(this.handleError);
    }

    delete(url: string, params?: any) {
        let options: RequestOptionsArgs = {};
        
        console.log('data.service deleting');
        // return this.http.delete(url, options).subscribe(
        //        return res;
        //    );

        this.http.delete(url, options).subscribe((res) => {
            console.log('deleted');
        });
    }

    private handleError(error: any) {
        console.error('server error:', error);
        if (error instanceof Response) {
            let errMessage = '';
            try {
                errMessage = error.json();
            } catch (err) {
                errMessage = error.statusText;
            }
            return Observable.throw(errMessage);
        }
        return Observable.throw(error || 'server error');
    }
}
