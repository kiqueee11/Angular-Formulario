import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

     showText: boolean = false;


  toggleText(): void {
    this.showText=!this.showText;
    alert(this.showText);
  }

}
