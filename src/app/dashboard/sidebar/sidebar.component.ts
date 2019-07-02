import { Component, OnInit } from '@angular/core';
import {getFromLocalStorage} from '../../utils/local-storage';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public currentUser;
  constructor() { }

  ngOnInit() {
    this.currentUser = getFromLocalStorage('FINLEX_USER');
  }

}
