import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {MediaMatcher} from "@angular/cdk/layout";
import * as moment from "moment/moment";
import {ContractService} from "../contract.service";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  mobileQuery: MediaQueryList;
  releaseDays: number = 0;
  private _mobileQueryListener: () => void;
  private _contractService: ContractService;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, contractService: ContractService) {
    this._contractService = contractService;
    this.mobileQuery = media.matchMedia('(max-width: 768px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  ngOnInit(): void {
    const start = moment(new Date(), "YYYY-MM-DD");
    const end = moment("2023-12-31", "YYYY-MM-DD");

    this.releaseDays = end.diff(start, 'days');

  }
}
