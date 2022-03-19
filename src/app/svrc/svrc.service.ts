import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

/**
 * Сервис реализует метод `emitronMethod(p)`.
 * Метод доступен компонентам по подписке.
 */
export class SvrcService {
  // constructor() { }

  month = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь",]

  /**
   * Определяем экземпляр-наблюдатель.
   * Этот объект следит за действиями и оповещает подписчиков.
   */
  emitron = new Subject();
  // a = this.emitron.subscribe(value => console.log("foo"))

  /**
   * Наблюдатель за объектом (рабочей областью экземпляра).
   * Результат предоставляется в подписке. 
   * Добавьте метод `subscribe(result=>{'здесь реализация для result'})`
   */
  emitronAdress = this.emitron.asObservable()

  /**
   * Получает порядковый номер текущего месяца в году и передает этот индекс 
   * методу `next()` объекта `emitron`.
   * @numberMonth numberMonth 
   * @returns название месяца на русском
   */
  emitronMethod(numberMonth: number) {

    /**
     * Обратите внимание на код!!!
     * Здесь после вычисления месяца из масcива ничего не происходит далее…???!!!
     * Вычисленный объект (имя месяца из массива) ожидает подписчика через `emitroneAdress`.
     * 
     */

    this.emitron.next(this.month[numberMonth] as string)


  }

}
