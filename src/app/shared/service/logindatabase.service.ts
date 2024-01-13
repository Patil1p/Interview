import { Injectable } from '@angular/core';
import { signIn } from '../model/login';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class LogindatabaseService {
  logindata: signIn = {
    username: 'ParkExcel',
    password: 'Excel@123'
  }
  constructor(private _router: Router) { }

  signInSuccess(obj: signIn) {
    if (obj.username === this.logindata.username && obj.password === this.logindata.password) {
      localStorage.setItem("loginKey", "Park Excel")
      Swal.fire({
        position: "center",
        icon: "success",
        title: "login Successful...",
        showConfirmButton: false,
        timer: 3000
      });
      this._router.navigate(['/order'])
      return true
    } else {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "If Login is not done then it won’t have access",
        showConfirmButton: true,
        timer: 3000
      });
      return false
    }
  }

  logOutDatabase() {
    localStorage.removeItem("loginKey")
  }
}
