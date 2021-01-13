import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimerPipe } from './Pipes/timer.pipe';
import { FormsModule } from '@angular/forms';
import { CountdownTimerComponent } from './Components/countdown-timer/countdown-timer.component';
import { countdownReducer } from './Store/contdowntimer.reducer';

@NgModule({
  declarations: [
    AppComponent,
    TimerPipe,
    CountdownTimerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot({countdown : countdownReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
