import { Component } from '@angular/core';
import { SvrcService } from './svrc/svrc.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})

/**
 * Данный компонент инициализирует сервис `SvrcService` в конструкторе
 * подписывается на резултаты этого сервиса. 
 * 
 * Отображает на странице `html` название текущего месяца по клику.
 * Кнопка клика реализуется в другом компоненте под названием `MonthComponent`.
 */
export class AppComponent {

  title = ' Angular ';

  month?: string;

  constructor(public svrc: SvrcService) {

    /**
     * ПОДПИСКА НА РЕЗУЛЬТАТ, ВЫПОЛНЕНЫЙ В ДРУГОМ КОМПОНЕНТЕ
     * Здесь, в конструкторе, подписываемся
     * на действия или изменнения сделанные другими
     * экземлярами в сервисе.
     * В нашем случае, сервисом `SvrcService` пользовался
     *  компонент `MonthComponent` и мы можем теперь
     *  следить за сделанными изменениями, подписавшись по адресу,
     * который распространяет результаты:
     */
    svrc.emitronAdress.subscribe(

      result => {
        // инит месяца текущим именем…
        this.month = result as string
      }

    )

  }

}
