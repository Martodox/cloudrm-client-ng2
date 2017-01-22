import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
      private _httpClient: HttpClient,
      private _router: Router
  ) { }

  ngOnInit() {

  }

  onSubmit() {
    this._sessionApi.login(this.credentials).subscribe(res => {
      this._httpClient.setToken(res);

      this._sessionApi.retrieve().subscribe(res => {
        this._router.navigate(['/dashboard']);
      }, err => {
        console.log('getting user data error', err)
      })

    }, err => {
      console.log('error', err);
    })
  }



}
