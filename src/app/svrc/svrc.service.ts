import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SvrcService {

  month = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь",]

  m?: string;

  constructor() { }

  emitron = new Subject()
  emitronAdress = this.emitron.asObservable()

  /**
   * Получает число текущего месяца 
   * @param param 
   * @returns название месяца
   */
  emitronMethod(param: number) {
    this.emitron.next(this.getMonth(param))


  }

  getMonth(param: number) {
    return this.month[param]
  }

}
