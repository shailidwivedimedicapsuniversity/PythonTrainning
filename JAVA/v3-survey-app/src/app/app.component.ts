import {ChangeDetectorRef, Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import { CommonService } from './common.service';  
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit, OnChanges {

  constructor(public commonService: CommonService,
              private activatedRoute: ActivatedRoute,
              private cdRef: ChangeDetectorRef) {

  }
  ngOnInit(): void {
    this.commonService.changeBaseLayoutEvent
      .subscribe(value => {
        this.commonService.baseLayout = value;
        this.cdRef.detectChanges();
      });
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.cdRef.detectChanges();
  }

}
