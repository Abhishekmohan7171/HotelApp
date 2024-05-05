import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  template: `
    <div class="main-container w-full bg-transparent pt-[50px]">
      <div class="navBar w-full flex items-center px-10">
        <div class="main w-1/2 flex items-center">
          <div class="logo w-1/3">
            <img
              src="/assets/icons/logo.svg"
              alt=""
              class="w-[149px] h-[72px]"
            />
          </div>

          <div class="flex w-2/3 justify-around items-center text-[#909090]">
            <div class="text-[24px]" href="">Home</div>
            <div class="text-[24px]">How we Work ?</div>
            <div class="text-[24px]">About</div>
          </div>
        </div>

        <div class="sub w-1/2 flex justify-end">
          <div class="flex w-1/3 gap-8 justify-end">
            <img
              src="/assets/icons/favorite.svg"
              alt=""
              class="w-[34px] h-[34px]"
            />
            <img
              src="/assets/icons/shop.svg"
              alt=""
              class="w-[34px] h-[34px]"
            />
            <img
              src="/assets/icons/admin.svg"
              alt=""
              class="w-[34px] h-[34px]"
            />
          </div>
        </div>
      </div>

      @if(mobileNav){
      <div class="menuBtn h-screen w-full">
        <div class="h-[100px] w-full flex justify-between items-center px-8">
          <img src="/assets/icons/logo.svg" alt="" class="w-[149px] h-[72px]" />
          <img
            class="w-[35px] h-[35px]"
            src="/assets/icons/close-button.png"
            alt=""
            (click)="closeNav()"
          />
        </div>

        <div
          class="flex flex-col w-full h-1/3 justify-around items-center text-[#909090]"
        >
          <div class="text-[24px]" href="">Home</div>
          <div class="text-[24px]">How we Work ?</div>
          <div class="text-[24px]">About</div>
        </div>

        <div class="sub w-full flex justify-center items-center h-1/3">
          <div class="flex w-1/3 gap-8 justify-center">
            <img
              src="/assets/icons/favorite.svg"
              alt=""
              class="w-[34px] h-[34px]"
            />
            <img
              src="/assets/icons/shop.svg"
              alt=""
              class="w-[34px] h-[34px]"
            />
            <img
              src="/assets/icons/admin.svg"
              alt=""
              class="w-[34px] h-[34px]"
            />
          </div>
        </div>
      </div>
      } @if(!mobileNav){
      <div class="menuBtn h-[100px] w-full">
        <div class="h-1/3 w-full flex justify-between items-center px-8">
          <img src="/assets/icons/logo.svg" alt="" class="w-[149px] h-[72px]" />
          <img
            class="w-[35px] h-[35px]"
            src="/assets/icons/hamburger.png"
            alt=""
            (click)="openNav()"
          />
        </div>
      </div>
      }
    </div>
  `,
  styles: `
  .navBar {
  animation: navAnim 1s forwards 0.3s;
  opacity: 0;
}

.translateRight {
  transform: translateY(-200%);
}

@keyframes navAnim {
  from {
    margin-top: -10rem;
  }
  to {
    margin-top: 0;
    opacity: 1;
  }
}

.menuBtn {
  display: none;
  animation: navAnim 1s forwards 0.3s;
  opacity: 0;
}

@media only screen and (max-width: 700px) {
  .navBar {
    display: none;
  }
  .menuBtn {
    display: block;
  }
  .menu_container {
    display: flex;
    justify-content: space-between;
  }
}

  `,
})
export class NavbarComponent {
  mobileNav: boolean = false;

  constructor(private router: Router) {}

  openNav() {
    this.mobileNav = true;
  }

  closeNav() {
    this.mobileNav = false;
  }
  navigateToAboutSection() {
    this.router.navigate(['/'], { fragment: 'aboutUs' });
  }
  navigateToHelpSection() {
    this.router.navigate(['/'], { fragment: 'helpPage' });
  }
}
