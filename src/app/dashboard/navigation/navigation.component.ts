import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Account } from '../../../models/models';
import { SessionApi } from '../../../api/SessionApi';
import { HttpClient } from '../../../api/HttpClient';

@Component({
  selector: 'dashboard-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  account: Account;

  constructor(
      private _route: ActivatedRoute,
      private _sessionApi: SessionApi,
      private _httpClient: HttpClient,
      private _router: Router
  ) { }

  ngOnInit() {

    this._route.data.subscribe((data: {session: Account}) => {
      this.account = data.session;
    })

  }

  logout() {
   this._sessionApi.logout().subscribe(() => {
     this._httpClient.removeToken();
     this._router.navigate(['/login']);
   }, err => {
     console.log('error', err);
   })
  }

}
