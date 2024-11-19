import { Component } from '@angular/core';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrl: './login-component.component.scss'
})
export class LoginComponentComponent {

  protected readonly navigator = navigator;
  cambiar(): void {

    window.location.href="/main";

  }
}
