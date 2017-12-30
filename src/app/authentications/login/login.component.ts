import {Component, OnInit} from '@angular/core';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'admin-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService : AuthService,
              private router: Router) {
  }

  ngOnInit() {
  }

  logIn(){
    this.authService.signIn().then(data=>{
      this.router.navigate(['dashboard']);
      console.log(data);
      return true;

    })
  }
}
