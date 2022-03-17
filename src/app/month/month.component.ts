import { Component, OnInit } from '@angular/core';
import { SvrcService } from '../svrc/svrc.service';

@Component({
  selector: 'app-month',
  templateUrl: 'month.component.html',
})

/**
 * Данный компонент подключается к сервису.
 * Вычисляет индекс текущего месяца.
 * Реализует метод `clickMonth()`.
 */
export class MonthComponent implements OnInit {


  /**
   * Инициализация сервиса по вычислению месяцев по индексу.
   * @param svrc 
   */
  constructor(public svrc: SvrcService) {


    this.svrc.emitronMethod(this.numberYear);

  }

  ngOnInit(): void { }

  /** 
   * Получаем индекс Месяца из текущей Даты.
  */
  numberYear = new Date().getMonth();

  /**
   * Метод теперь вызывает еще метод из сервиса, передавая аргумент в сервисный метод не получая ответа.
   * Ответ будет доступен только по подписке в любом компоненте, который подпишется на сервис и получит ответ, который обрабатывает аргумент. В нашем случае это `SvrcService`.
   */
  clickMonth() {

    this.svrc.emitronMethod(this.numberYear);
  }
}
