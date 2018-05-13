import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowServerCreation = false;
  step = 2;
  showServerCreationStatus = false;
  serverName;
  servers = ['TestServer 1', 'TestServer 2'];
  displayDetails = true;
  logs = [];

  constructor() {
      setTimeout( () => {
          this.allowServerCreation = true;
      } , 2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.showServerCreationStatus = true;
    this.servers.push(this.serverName);
  }

  onUpdateServerName(event) {
    this.serverName = event.target.value;
  }

  toggleDetails() {
    this.displayDetails = !this.displayDetails;
    this.logs.push(new Date());
  }

  getLogColor(log) {
    return log >= 4 ? 'blue' : '';
  }

}
