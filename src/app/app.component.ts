import { Component, ElementRef } from '@angular/core';
import {Keepalive} from '@ng-idle/keepalive';
import {Idle, DEFAULT_INTERRUPTSOURCES} from '@ng-idle/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  idleState;
  timedOut = false;
  timeWarn = false;
  lastPing?: Date = null;
  OnState;

  constructor(private idle: Idle, private keepalive: Keepalive, private router: Router) {
    // sets an idle timeout of 5 seconds, for testing purposes.
    idle.setIdle(5);
    // sets a timeout period of 5 seconds. after 10 seconds of inactivity, the user will be considered timed out.
    idle.setTimeout(5);
    // sets the default interrupts, in this case, things like clicks, scrolls, touches to the document
    idle.setInterrupts(DEFAULT_INTERRUPTSOURCES);
    
   
    //idle.onIdleEnd.subscribe(() => this.idleState = 'No longer idle.');
    idle.onTimeout.subscribe(() => {
     alert('Session has been Expired!!');
      this.timedOut = true;
      this.timeWarn = false;
      this.router.navigate(['logout']);
    });
    //idle.onIdleStart.subscribe(() => this.idleState = 'You\'ve gone idle!');
    idle.onTimeoutWarning.subscribe((countdown) => {
      this.idleState ='You will time out in ' + countdown + ' seconds!';
      this.timeWarn = true;
    });

    // sets the ping interval to 15 seconds
    keepalive.interval(15);

    keepalive.onPing.subscribe(() => this.lastPing = new Date());

    this.reset();
   
  }


  reset() {
    this.idle.watch();
    this.OnState = this.router.navigate(['products']); 
    this.timedOut = false;
  }
}
