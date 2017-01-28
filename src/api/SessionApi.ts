import { Injectable } from '@angular/core';
import { HttpClient } from './HttpClient';
import { RequestMethod, RequestOptions} from '@angular/http';
import { Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Token, Credentials, Account } from './../models/models';

import { environment } from '../environments/environment';

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
     * @returns {Observable<Token>}
     */
    public login(credentials: Credentials): Observable<Credentials> {

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
     * @returns {Observable<Account>}
     */
    public retrieve(): Observable<Account> {

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
