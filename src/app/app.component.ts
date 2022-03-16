import { Component } from '@angular/core';
import { SvrcService } from './svrc/svrc.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'Сервис и передача данных\n в компонентах Angular с роутингом.';

  month?: string;

  constructor(public svrc: SvrcService) {

    svrc.emitronAdress.subscribe(param => {

      this.month = param as string


    })


  }






}

