// src/app/spinning-wheel.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SpinningWheelService {
  private outcomes: string[] = ['Prize 1', 'Prize 2', 'Try Again', 'Bonus!'];

  spin(): string {
    const randomIndex = Math.floor(Math.random() * this.outcomes.length);
    return this.outcomes[randomIndex];
  }
}
