import { Component } from '@angular/core';

@Component({
  selector: 'app-layout-register',
  templateUrl: './layout-register.component.html',
  styleUrl: './layout-register.component.scss'
})
export class LayoutRegisterComponent {

  cambiar(): void {

    window.location.href="/main";

  }
}
