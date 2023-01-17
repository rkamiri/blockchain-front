import { Component, OnInit } from '@angular/core';
import {BarChartOption, ChartData, ChartView} from "ngx-chart";

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
  ngOnInit(): void {
  }

  columnChartOptions = {
    animationEnabled: true,
    title: {
      text: 'First round results',
    },
    data: [
      {
        type: 'column',
        dataPoints: [
          { label: 'God of war', y: 10 },
          { label: 'Ratchet', y: 15 },
          { label: 'Grand turismo', y: 250 },
          { label: 'Uncharted', y: 200 },
          { label: 'Returnal', y: 40 },
          { label: 'Tsuchima', y: 70 },
          { label: 'Last of us 2', y: 20 },
        ],
      },
    ],
  };

  columnChartOptions2 = {
    animationEnabled: true,
    title: {
      text: 'Final round results',
    },
    data: [
      {
        type: 'column',
        dataPoints: [
          { label: 'God of war', y: 10 },
          { label: 'Ratchet', y: 15 },
          { label: 'Grand turismo', y: 100 },
        ],
      },
    ],
  };

  game = {name: "Gran Turismo® 7", platform: "PS4, PS5, PC", price: "$70 - $80", description: "Gran Turismo® 7 brings together the very best features of the Real Driving Simulator.", release: "Fall 2022", url:"https://static.actugaming.net/media/2020/06/gran-turismo-7-jaquette.jpg"};

}