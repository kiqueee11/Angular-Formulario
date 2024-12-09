import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';
@Injectable({
  providedIn: 'root'
})
export class PopupService {

  constructor() { }

  showMessage(
    type: 'success'|'info'|'warning'|'question'|'error',
    title: string, message: string
  ) {
    Swal.fire({
      title: title,
      text: message,
      icon: type,
      confirmButtonText: 'Cerrar',
    })
  }



}
