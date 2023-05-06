import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit{

  windowScrolled = false;

  scrollToTop(): void {
    window.scrollTo(0, 0);
    };

    ngOnInit(): void {
      window.addEventListener("scroll", ()=> {
        this.windowScrolled = window.scrollY !== 0;
      });
    }
  }


