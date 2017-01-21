import { Component, OnInit } from '@angular/core';

import { HttpClient } from '../../api/HttpClient';
import { SessionApi } from '../../api/SessionApi';
import { Credentials } from '../../models/Credentials';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  credentials: Credentials = {
    username: '',
    password: ''
  };

  constructor(
      private _sessionApi: SessionApi,
      private _httpClient: HttpClient
  ) { }

  ngOnInit() {

  }

  onSubmit() {
    this._sessionApi.login(this.credentials).subscribe(res => {
      this._httpClient.setToken(res);

      this._sessionApi.retrieve().subscribe(res => {
        console.log(res)
      }, err => {
        console.log('getting user data error', err)
      })

    }, err => {
      console.log('error', err);
    })
  }



}
