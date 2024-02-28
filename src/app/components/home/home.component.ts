import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { EMPTY_SUBSCRIPTION } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  activeTab: number = 0;

  activeTab2: number = 1;

  activeTab3: number = 0;

  value1: boolean = false;

  countries: any;

  members: any = [
      { image: 'avatar-f-13', name: 'Jenny Wilson', username:'@jnnywlsn', date: 'Oct 30, 2022', active: '2 hours ago' },
      { image: 'avatar-f-14', name: 'Kathryn Murphy', username: '@murphyyy', date: 'Jul 14, 2022', active: '5 days ago' },
      { image: 'avatar-f-15', name: 'Leslie Alexander', username:'@leslie98', date: 'Dec 19, 2022', active: '4 days ago' },
      { image: 'avatar-m-13', name: 'Ralph Edwards', username:'@ralphadator', date: 'Feb 11, 2022', active: '9 hours ago' },
      { image: 'avatar-m-14', name: 'Guy Hawkins', username:'@guyman', date: 'Aug 02, 2022', active: '2 hours ago' },
      { image: 'avatar-f-16', name: 'Wade Warren', username:'@wayyyd', date: 'May 20, 2022', active: '6 days ago' },
      { image: 'avatar-f-17', name: 'Kristin Watson', username:'@kristinwtsn', date: 'Nov 28, 2022', active: '5 days ago' }
  ];

  items: MenuItem[] = [{
      label: 'Options',
      items: [{
          label: 'Update',
          icon: 'pi pi-refresh',
      },
      {
          label: 'Delete',
          icon: 'pi pi-times',
      }
      ]}
  ];

  roles: any = [
      { color: 'bg-purple-500', alias: 'Project Manager', date: 'Oct 30, 2022', users: '4 users' },
      { color: 'bg-blue-500', alias: 'QA Manager', date: 'Oct 30, 2022', users: '2 users' },
      { color: 'bg-green-500', alias: 'QA Tester', date: 'Oct 30, 2022', users: '1 user' },
      { color: 'bg-red-500', alias: 'Product Manager', date: 'Oct 30, 2022', users: '7 users' },
      { color: 'bg-indigo-500', alias: 'UX Designer', date: 'Oct 30, 2022', users: '1 users' },
      { color: 'bg-green-500', alias: 'UI Designer', date: 'Oct 30, 2022', users: '3 users' },
      { color: 'bg-orange-500', alias: 'Developer', date: 'Oct 30, 2022', users: '5 users' }
  ];

  ngOnInit() {
      this.countries = [
          {name: 'Australia', code: 'AU'},
          {name: 'Brazil', code: 'BR'},
          {name: 'China', code: 'CN'},
          {name: 'Egypt', code: 'EG'},
          {name: 'France', code: 'FR'},
          {name: 'Germany', code: 'DE'},
          {name: 'India', code: 'IN'},
          {name: 'Japan', code: 'JP'},
          {name: 'Spain', code: 'ES'},
          {name: 'United States', code: 'US'}
      ]; 
  }

}
