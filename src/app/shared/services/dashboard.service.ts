import { Injectable } from '@angular/core';

export interface DashboardApp {
  name: string;
  link: string;
  icon: string;
}

export const DASHBOARDAPPS: DashboardApp[] = [
  {
    name: 'Administrator',
    link: '',
    icon: 'assets/images/app-administrator.png'
  },
  {
    name: 'Anders Pink Reports',
    link: '',
    icon: 'assets/images/app-anders.png'
  },
  {
    name: 'Catalogue',
    link: '',
    icon: 'assets/images/app-catalogue.png'
  },
  {
    name: 'Your community',
    link: '',
    icon: 'assets/images/app-community.png'
  },
  {
    name: 'Library (Student)',
    link: '',
    icon: 'assets/images/app-library-student.png'
  },
  {
    name: 'Notifications',
    link: '',
    icon: 'assets/images/app-notifications.png'
  },
  {
    name: 'OpenSesame',
    link: '',
    icon: 'assets/images/app-opensesame.png'
  },
  {
    name: 'Learning Play',
    link: '',
    icon: 'assets/images/app-play.png'
  },
  {
    name: 'Record',
    link: '',
    icon: 'assets/images/app-record.png'
  },
  {
    name: 'Reports',
    link: '',
    icon: 'assets/images/app-reports.png'
  }
];

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor() { }

  getDashboardApps(): DashboardApp[] {
    return DASHBOARDAPPS;
  }
}
