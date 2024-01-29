import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  mobileNav: boolean = false;

  constructor(private router: Router){}


  openNav() {
    this.mobileNav = true;
  }

  closeNav() {
    this.mobileNav = false
  }
  navigateToAboutSection() {
    this.router.navigate(['/'], { fragment: 'aboutUs' });
  }
  navigateToHelpSection() {
    this.router.navigate(['/'], { fragment: 'helpPage' });
  }

}
