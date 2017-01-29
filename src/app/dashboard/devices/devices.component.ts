import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.scss']
})
export class DevicesComponent implements OnInit {

  private devices = new Promise(resolve => {
    resolve([
      'remote 1',
      'remote 2'
    ]);
  });

  constructor() { }

  ngOnInit() {
  }

}
