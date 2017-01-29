import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Account } from '../../../models/models'

@Component({
  selector: 'dashboard-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  account: Account;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.data.subscribe((data: {session: Account}) => {
      this.account = data.session;
    })

  }

}
