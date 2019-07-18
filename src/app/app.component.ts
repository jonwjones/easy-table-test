
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Company, data } from '../assets/data';
import { ConfigService } from './configuration.service';
import { Columns } from 'ngx-easy-table';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  providers: [ConfigService]
})
export class AppComponent  implements OnInit {
  @ViewChild('phoneTpl', { static: true }) phoneTpl: TemplateRef<any>;
  public columns: Columns[];
  data: Company[] = [];
  configuration;

  constructor() {
    this.configuration = ConfigService.config;
    this.data = data;
  }

  ngOnInit(): void {
    this.columns = [
      { key: 'phone', title: 'Phone', cellTemplate: this.phoneTpl },
      { key: 'age', title: 'Age' },
      { key: 'company', title: 'Company' },
      { key: 'name', title: 'Name' },
      { key: 'isActive', title: 'STATUS' },
    ];
  }
}