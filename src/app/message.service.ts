import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  private messages: string[] = [
    'hello there!',
    'Karibu chai?',
    'weeeuh buda!',
    'welcome!!!!!',
    'Embrace the adventure the hunt awaits!',
  ];

  getRandomMessage(): string {
    const randomIndex = Math.floor(Math.random() * this.messages.length);
    return this.messages[randomIndex];
  }
}
