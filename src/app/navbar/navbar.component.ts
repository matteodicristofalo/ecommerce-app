import { Component, OnInit, ElementRef } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  navbarOpen;
  dropdownOpen:boolean = false;
  loggedUser;

  constructor(private elementRef: ElementRef, private service: AuthService) { }

  ngOnInit() {
    this.navbarOpen = this.elementRef.nativeElement.querySelector('ul');
    this.service.currentUser.subscribe(user => this.loggedUser = user);
  }

  toggleNavbar() {
    this.navbarOpen.classList.toggle("active");
  }

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.loggedUser = null;
  }

}
