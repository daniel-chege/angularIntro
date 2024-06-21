// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MessageService } from './message.service';
import { TalkativeDirective } from './talkative.directive';
import { SpinningWheelService } from './spinning-wheel.service';
import { SpinningWheelComponent } from './spinning-wheel/spinning-wheel.component';
import { PlaceholderPipe } from './placeholder.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TalkativeDirective,
    SpinningWheelComponent,
    PlaceholderPipe,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [MessageService, SpinningWheelService],
  bootstrap: [AppComponent],
})
export class AppModule {}
