import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {
    series: [
      {
        type: 'column',
        data: [1, 2, 3, 4, 5],
      },
    ],
  };
}
