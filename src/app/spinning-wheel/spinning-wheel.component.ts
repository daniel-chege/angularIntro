import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SpinningWheelService } from '../spinning-wheel.service';

@Component({
  selector: 'app-spinning-wheel',
  standalone:true,
  imports: [RouterOutlet, SpinningWheelComponent, CommonModule],
  templateUrl: './spinning-wheel.component.html',
})
export class SpinningWheelComponent {
  result: string = '';
  extraSpin: boolean = false;

  constructor(private spinningWheelService: SpinningWheelService) {}

  spinWheel() {
    this.result = this.spinningWheelService.spin();
    if (this.result === 'Try Again') {
      this.extraSpin = true;
    } else {
      this.extraSpin = false;
    }
  }
}
