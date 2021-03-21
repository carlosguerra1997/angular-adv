import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any[] = [
    {
      title: 'Dashboard',
      icon: 'mdi mdi-gauge',
      submenu: [
        { title: 'Main', url: '/' },
        { title: 'Graphics', url: 'chart' },
        { title: 'Rxjs', url: 'rxjs' },
        { title: 'Promises', url: 'promesas' },
        { title: 'ProgressBar', url: 'progress' },
      ]
    }
  ]

  constructor() { }
}
