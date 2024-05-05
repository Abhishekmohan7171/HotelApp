import { Component, ViewChild, ElementRef } from '@angular/core';
import { animate, spring } from 'motion';

@Component({
  selector: 'app-works',
  template: `
    <div class="main-container w-full h-screen ">
      <div
        class="work w-full flex flex-col justify-cente items-center pt-[20px]"
      >
        <div class="header w-full text-center relative">
          <p class="text-[90px] text-[#ffffff0d] absolute z-0 behind">
            How we Work
          </p>
          <p class="text-[40px] text-[#ffffff]  z-10 pt-2.5">How we Work</p>
        </div>

        <!-- toggle button  -->
        <div class="toggle mt-[100px] w-full flex justify-center">
          <div
            class="switch-container my-6 bg-[#D9D9D9] rounded-[69px] flex relative w-[720px] h-[50px] pl-1"
          >
            <div
              class="w-1/3 z-1 relative flex flex-row justify-center items-center cursor-pointer"
              (click)="buttonToggle('request')"
            >
              <div
                class="absolute font-semibold text-black py-4 outline-none text-sm phone:text-xs tablet:text-xs"
              >
                Menu
              </div>
              <div
                class="absolute font-medium outline-none text-sm phone:text-xs tablet:text-xs text-white z-10"
                [ngClass]="{
                  hidden: toggle === 'response' || toggle === 'something'
                }"
              >
                Menu
              </div>
            </div>
            <div
              class="w-1/3 z-1 relative flex flex-row justify-center items-center cursor-pointer"
              (click)="buttonToggle('response')"
            >
              <div
                class="absolute font-semibold text-black py-4 outline-none text-sm phone:text-xs tablet:text-xs"
              >
                Checkout
              </div>
              <div
                class="absolute font-medium outline-none text-sm phone:text-xs tablet:text-xs text-white z-10"
                [ngClass]="{
                  hidden: toggle === 'request' || toggle === 'something'
                }"
              >
                Checkout
              </div>
            </div>
            <div
              class="w-1/3 z-1 relative flex flex-row justify-center items-center cursor-pointer"
              (click)="buttonToggle('something')"
            >
              <div
                class="absolute font-semibold text-black py-4 outline-none text-sm phone:text-xs tablet:text-xs"
              >
                Admin Dash
              </div>
              <div
                class="absolute font-medium outline-none text-sm phone:text-xs tablet:text-xs text-white z-10"
                [ngClass]="{
                  hidden: toggle === 'request' || toggle === 'response'
                }"
              >
                Admin Dash
              </div>
            </div>
            <div
              class="absolute w-[230px] h-[40px] toggle-white rounded-[60px] bg-[#D3AE2C] mt-1.5"
              #toggleSwitch
            ></div>
          </div>
        </div>
        <!-- toggle button ends  -->

        <!-- content section  -->
        <div class="content w-11/12 h-[700px] flex gap-4">
          <div
            class="w-1/2 pr-4 flex flex-col justify-center items-center desc"
          >
            <div class="">
              <p class="text-[32px] text-white font-normal">
                Streamlined Dining: From Menu to Checkout, Unveiling the EzOrder
                Experience!
              </p>
              <p class="text-[24px] text-[#BDBDBD] font-light pt-[50px]">
                Discover the effortless charm of EzOrder in three simple steps.
                Navigate our user-friendly menu on the tablet, add items to your
                liking, and seamlessly place your order. Checkout is a breeze,
                and behind the scenes, our admin dashboard ensures precision in
                delivering your selections.
              </p>
            </div>
          </div>

          <div class="w-1/2 vid flex flex-col justify-center items-center">
            <div class="video-frame rounded-[32px] w-full h-[500px]"></div>
          </div>
        </div>
        <!-- content section ends  -->
      </div>
    </div>
  `,
  styles: `
  .main-container{
  background-color: #181818;
}

.behind{
  top:50%;
  left:50%;
  transform: translate(-50%,-50%);
}

.video-frame{
  background-image:  linear-gradient(180deg, #393939 0%, #201C1C 100%);
  box-shadow: 33px 22px 33px 0px #292929 inset;
}


@media only screen and (max-width: 700px) {

  .main-container{
    padding-top:80px
  }
  .content{
    flex-direction: column;
  }

  .desc{
    width: 100%;
    text-align: center;
  }

  .vid{
    width: 100%;
  }
}

  `,
})
export class WorksComponent {
  @ViewChild('toggleSwitch') toggleSwitch!: ElementRef;
  toggle = 'request';

  //sliding button logic

  slideRight(transform: number) {
    animate(
      this.toggleSwitch.nativeElement,
      { x: transform },
      {
        duration: 0.5,
        easing: spring({ velocity: 1000, damping: 300, stiffness: 300 }),
      } // 👈 modify the easing
    );
  }

  slideLeft(transform: number) {
    animate(
      this.toggleSwitch.nativeElement,
      { x: transform },
      {
        duration: 0.5,
        easing: spring({ velocity: 1000, damping: 300, stiffness: 300 }),
      } // 👈 modify the easing
    );
  }

  buttonToggle(toggle: string) {
    switch (toggle) {
      case 'request':
        this.toggle === 'response' ? this.slideLeft(0) : this.slideLeft(0);
        this.toggle = 'request';
        // this.image = 'docs.png';
        break;
      case 'response':
        this.toggle === 'request' ? this.slideRight(245) : this.slideLeft(245);
        this.toggle = 'response';
        // this.image = 'events.png';
        break;
      case 'something':
        this.toggle === 'request' ? this.slideRight(482) : this.slideRight(482);
        this.toggle = 'something';
        // this.image = 'logs.png';
        break;
    }
  }
}
