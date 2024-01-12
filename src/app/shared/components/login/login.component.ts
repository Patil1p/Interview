import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LogindatabaseService } from '../../service/logindatabase.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

   signIn !:FormGroup
  constructor(private _router:Router,
              private _login:LogindatabaseService) { }

  ngOnInit(): void {
    this.signInForm()
  }

  signInForm(){
    this.signIn = new FormGroup({
        username: new FormControl(null, Validators.required),
        password: new FormControl(null, Validators.required)

    })

  }

  onloginSubmit(){
    this.signIn
    let obj = {
      username: this.signIn.value.username,
      password:this.signIn.value.password
    }
   this._login.signInSuccess(obj)
    console.log(obj);
    this.signIn.reset()
   this._router.navigate(['/order'])
    
  }

}
