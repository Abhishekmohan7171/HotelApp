import { Component } from '@angular/core';

@Component({
  selector: 'app-dining',
  templateUrl: './dining.component.html',
  styleUrls: ['./dining.component.scss']
})
export class DiningComponent {

  cards = [
    {
      image:"/assets/images/ramen.svg",
      title:"Food Menu"
    },
    {
      image:"/assets/images/juice.svg",
      title:"Drink Menu"
    },
    {
      image:"/assets/images/admin.svg",
      title:"Login as Admin"
    },
  ]

}
