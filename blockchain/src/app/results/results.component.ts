import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {BarChartOption, ChartData, ChartView} from "ngx-chart";
import {MediaMatcher} from "@angular/cdk/layout";

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;
  ngOnInit(): void {
  }
  constructor(media: MediaMatcher, changeDetectorRef: ChangeDetectorRef) {
    this.mobileQuery = media.matchMedia('(max-width: 768px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }
  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  columnChartOptions = {
    backgroundColor: "#000000",
    theme: "dark1",
    animationEnabled: true,
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
    backgroundColor: "#000000",
    theme: "dark1",
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
