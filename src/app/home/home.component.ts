import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Router } from '@angular/router';
import { PATH_DETAIL } from '../constantes';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user:User;
  isDisplay: boolean = false;

  constructor(private router: Router, private apiService: ApiServiceService) { }


  navigateToDetail(login){
    console.log(login);
    this.apiService.getUser(login).toPromise()
    .then(()=>this.router.navigate([PATH_DETAIL, login ])
    .catch(err=>this.isDisplay=! this.isDisplay));
  }


  ngOnInit() {
  }

}
