import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  menuBox: boolean = false;
  mobileNav: boolean = true;

  constructor(private router: Router){}


  openNav() {
    this.menuBox = true;
  }

  closeNav() {
    this.menuBox = false;
    this.mobileNav = false
  }
  navigateToAboutSection() {
    this.router.navigate(['/'], { fragment: 'aboutUs' });
  }
  navigateToHelpSection() {
    this.router.navigate(['/'], { fragment: 'helpPage' });
  }

}
