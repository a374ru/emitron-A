import { Component, OnInit } from '@angular/core';
import { SvrcService } from '../svrc/svrc.service';

@Component({
  selector: 'app-month',
  templateUrl: 'month.component.html',
})
export class MonthComponent implements OnInit {
  constructor(public svrc: SvrcService) { }

  ngOnInit(): void { }

  monthYear = new Date().getMonth();

  setMonth() {
    this.svrc.emitronMethod(this.monthYear);
  }
}
