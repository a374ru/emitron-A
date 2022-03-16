import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MonthComponent } from './month/month.component';

const routes: Routes = [
  { // Важный момент кода
    path: '',
    component: MonthComponent,
  },
  {
    path: 'month',
    component: MonthComponent,
  },
  {
    path: '**',
    redirectTo: '/',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
