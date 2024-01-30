import { Component,ViewChild,ElementRef } from '@angular/core';
import { animate, spring } from 'motion';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss']
})
export class WorksComponent {

  @ViewChild('toggleSwitch') toggleSwitch!: ElementRef;
  toggle = 'request';

  //sliding button logic

  slideRight(transform: number) {
    animate(
        this.toggleSwitch.nativeElement,
        { x: transform },
        { duration: 0.5, easing: spring({ velocity: 1000, damping: 300, stiffness: 300 }) } // 👈 modify the easing
    );
  }

  slideLeft(transform: number) {
      animate(
          this.toggleSwitch.nativeElement,
          { x: transform },
          { duration: 0.5, easing: spring({ velocity: 1000, damping: 300, stiffness: 300 }) } // 👈 modify the easing
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
