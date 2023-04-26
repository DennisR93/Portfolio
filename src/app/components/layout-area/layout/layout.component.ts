import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout'
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  isWideScreen: Observable<boolean>;

  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
    if (this.breakpointObserver.isMatched('(max-width: 600px)')) {
      console.log("Screen is less than 600px");
    }
    this.isWideScreen = this.breakpointObserver.observe([Breakpoints.HandsetPortrait]).pipe(map(({ matches }) => matches));
  };

}
