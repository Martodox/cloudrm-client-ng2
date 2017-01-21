import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient }                                           from './HttpClient';
import { RequestMethod, RequestOptions, RequestOptionsArgs } from '@angular/http';
import { Response, ResponseContentType }                     from '@angular/http';

import { Observable }                                        from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Account } from '../models/Account';
import { Credentials } from '../models/Credentials';

import { environment } from '../environments/environment';

/* tslint:disable:no-unused-variable member-ordering */


@Injectable()
export class SessionApi {
    protected basePath: string;


    constructor(protected http: HttpClient) {
        this.basePath = `${environment.apiUr}/session` ;
    }


    /**
     * Logs an user to the system returning token
     *
     * @param credentials
     * @returns {Observable<R>}
     */
    public login(credentials: Credentials): Observable<string> {

        return this.http.request(this.basePath, new RequestOptions({
            method: RequestMethod.Post,
            body: credentials
        }))
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Gets users data from the system
     *
     * @returns {Observable<R>}
     */
    public retrieve(): Observable<string> {

        return this.http.request(this.basePath, new RequestOptions({
            method: RequestMethod.Get
        }))
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

}
