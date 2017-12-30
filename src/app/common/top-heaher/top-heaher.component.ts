import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../authentications/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'admin-top-heaher',
  templateUrl: './top-heaher.component.html',
  styleUrls: ['./top-heaher.component.scss']
})
export class TopHeaherComponent implements OnInit {

  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
  }

  signOut(){
    this.authService.signOut().then(()=>{
      this.router.navigate(['login'])
    })
  }

}
