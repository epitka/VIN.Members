import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpParams, HttpHeaders } from '@angular/common/http';

import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import { Observer } from 'rxjs/Observer';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable()
export class DataService {
    constructor(private httpClient: HttpClient) { }

    get<T>(url: string, params?: any): Observable<T> {

        const httpParamsOptions = { fromObject: params };
        const options = params ? { params: new HttpParams(httpParamsOptions) } : {};

        return this.httpClient.get<T>(url, options)
            .catch(this.handleError);
    }

    //postWithId(url: string, data: any, params?: any): Observable<Response> {
    //    return this.doPost(url, data, true, params);
    //}

    //post(url: string, data: any, params?: any): Observable<Response> {
    //    return this.doPost(url, data, false, params);
    //}

    //putWithId(url: string, data: any, params?: any): Observable<Response> {
    //    return this.doPut(url, data, true, params);
    //}

    //private doPost(url: string, data: any, needId: boolean, params?: any): Observable<Response> {
    //    let options: RequestOptionsArgs = {};

    //    return this.httpClient.post(url, data, options).map(
    //        (res: Response) => {
    //            return res;
    //        }).catch(this.handleError);
    //}

    //private doPut(url: string, data: any, needId: boolean, params?: any): Observable<Response> {
    //    let options: RequestOptionsArgs = {};

    //    options.headers = new Headers();

    //    return this.httpClient.put(url, data, options).map(
    //        (res: Response) => {
    //            return res;
    //        }).catch(this.handleError);
    //}

    delete(url: string) {

        console.log("deleting @: " + url);

        return this.httpClient.delete(url, httpOptions)
                   .catch(this.handleError);
           
    }

    private handleError(error: any) {

        console.error('server error:', error);

        if (error instanceof HttpResponse) {
            let errMessage = '';
            try {
                errMessage = error.body;
            } catch (err) {
                errMessage = error.statusText || "";
            }
            return Observable.throw(errMessage);
        }
        return Observable.throw(error || 'server error').toPromise();
    }
}
