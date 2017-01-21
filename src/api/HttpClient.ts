import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';

@Injectable()
export class HttpClient {

    token: string;

    constructor(private http: Http) {
        this.token = localStorage.getItem('token');
    }

    createAuthorizationHeader(headers: Headers) {
        if (this.token) {
            headers.append('Authorization', this.token);
        }
    }

    setToken(token: any): void {
        this.token = token.token;
        localStorage.setItem('token', this.token);
    }

    removeToken():void {
        this.token = '';
        localStorage.removeItem('token');
    }

    request(url, requestOptions) {
        let headers = new Headers();
        this.createAuthorizationHeader(headers);

        requestOptions['headers'] = headers;

        return this.http.request(url, requestOptions);
    }
}