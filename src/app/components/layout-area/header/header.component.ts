import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  showToggle: boolean;

  // Toggle Mobile navbar on/off
  onToggle() {
    this.showToggle = !this.showToggle;
}

}
