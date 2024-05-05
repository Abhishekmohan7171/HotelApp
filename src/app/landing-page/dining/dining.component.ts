import { Component } from '@angular/core';

@Component({
  selector: 'app-dining',
  template: `
    <div class="main-container w-full h-screen ">
      <div
        class="work w-full flex flex-col justify-center items-center pt-[20px]"
      >
        <div class="header w-full text-center relative">
          <p class="text-[90px] text-[#ffffff0d] absolute z-0 behind">
            Start your Dining
          </p>
          <p class="text-[40px] text-[#ffffff]  z-10 pt-2.5">
            Start your Dining
          </p>
        </div>

        <div class="cards-container w-11/12 flex justify-between pt-[200px]">
          <ng-container *ngFor="let item of cards">
            <div
              class="card relative flex flex-col justify-between pb-6 items-center"
            >
              <div>
                <img class="img absolute" src="{{ item.image }}" alt="" />
              </div>
              <div class="text-center">
                <p class="text-[24px] font-normal text-white pb-2">
                  {{ item.title }}
                </p>
                <p class="text-[#D3AE2C] text-[24px] font-normal">
                  See more ->
                </p>
              </div>
            </div>
          </ng-container>
        </div>
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

.card{
  width: 452px;
  height: 337px;
  flex-shrink: 0;
  border-radius: 32px;
  background: linear-gradient(180deg, #393939 0%, #201C1C 100%);
  box-shadow: 33px 22px 33px 0px #292929 inset;
}

.img{
    text-align: center;
    top: 15%;
    left: 0;
    right: 0;
    margin: auto;
    transform: translateY(-50%);
}

@media only screen and (max-width: 700px) {

  .main-container{
    padding-top:500px
  }

  .cards-container{
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

}


  `,
})
export class DiningComponent {
  cards = [
    {
      image: '/assets/images/ramen.svg',
      title: 'Food Menu',
    },
    {
      image: '/assets/images/juice.svg',
      title: 'Drink Menu',
    },
    {
      image: '/assets/images/admin.svg',
      title: 'Login as Admin',
    },
  ];
}
