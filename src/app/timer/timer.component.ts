import { Component, OnInit, OnDestroy } from '@angular/core';
import { TimerService } from '../timer.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit, OnDestroy {

  interval!: any;

  constructor(public ts: TimerService){

  }

  ngOnInit(): void {
    this.ts.restart();
  }

  formatPhase(phase: number){
    switch(phase){
      case 0: return 'Preparação';
      case 1: return 'Exercício';
      case 2: return 'Descanso';
      default: return '';
    }
  }

  start() {
    if(!this.interval) {
      let lastTime = Date.now();
      this.interval = setInterval(() => {
        let currentTime = Date.now();
        let ellapsedTimeMs = currentTime - lastTime;
        lastTime = currentTime;
        this.ts.decrementTimeLeft(ellapsedTimeMs);
      }, 100);
    }
  }

  pause() {
    if(this.interval){
      clearInterval(this.interval);
      //this.interval = undefined;
    }
  }

  ngOnDestroy(){
    this.pause();
  }

  restart(){
    this.ts.restart();
  }

  next(){
    this.ts.next();
  }
}
