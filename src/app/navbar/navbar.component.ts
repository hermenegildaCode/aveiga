import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  // @Output() sidenavClose = new EventEmitter();
  constructor(private router: Router ) { }
  ngOnInit() {
  }
  // public onSidenavClose = () => {
  //   this.sidenavClose.emit();
  // }
}
