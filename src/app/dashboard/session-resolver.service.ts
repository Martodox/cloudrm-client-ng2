import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { SessionApi } from '../../api/SessionApi';
import { HttpClient } from '../../api/HttpClient';
import { Account } from '../../models/models';



@Injectable()
export class SessionResolverService implements Resolve<any>{

  constructor(private sessionApi: SessionApi, private httpClient: HttpClient, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {

    return this.sessionApi.retrieve().subscribe(response => {
      return response;
    }, () => {
      this.router.navigate(['/login']);
      return null;
    });

  }

}
