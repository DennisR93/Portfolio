import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit{

  windowScrolled = false;

  // Scroll to top of body at 0, 0 (Button)
  scrollToTop(): void {
    window.scrollTo(0, 0);
    };

    ngOnInit(): void {
      // Change windowScrolled when scroll Y axis
      window.addEventListener("scroll", ()=> {
        this.windowScrolled = window.scrollY !== 0;
      });
    }
  }


