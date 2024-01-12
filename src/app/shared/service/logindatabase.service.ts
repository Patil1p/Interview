import { Injectable } from '@angular/core';
import { signIn } from '../model/login';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class LogindatabaseService {
  logindata:signIn= {
    username: 'ParkExcel',
    password: 'Excel@123'
  }
  constructor(private _router:Router) { }

  signInSuccess(obj:signIn){
    if(obj.username === this.logindata.username && obj.password ===this.logindata.password){
      localStorage.setItem("loginKey", "successful login")
      Swal.fire({
        position: "center",
        icon: "success",
        title: "login Successful..WelCome",
        showConfirmButton: false,
        timer: 1500
      });
      this._router.navigate(['/order'])
      return true 
    }else{
      Swal.fire({
        position: "center",
        icon: "error",
        title: "login UnSuccessful ",
        showConfirmButton: true,
        timer: 1500
      });
      return false
    }
  }

  logOutDatabase(){
    localStorage.removeItem("loginKey")
  }
}
