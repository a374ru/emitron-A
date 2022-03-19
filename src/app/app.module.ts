import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MonthComponent } from './month/month.component';
import { SvrcService } from './svrc/svrc.service';

@NgModule({
  declarations: [
    AppComponent,
    MonthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [SvrcService],
  bootstrap: [AppComponent]
})
export class AppModule { }
