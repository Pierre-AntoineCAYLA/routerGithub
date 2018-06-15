import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ParamMap } from '@angular/router';
import { User } from '../user';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  login: string;
  user: User;

  constructor(private router: Router, private route: ActivatedRoute, private apiService:ApiServiceService) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.login = params.get('user');
    });

    this.apiService.getUser(this.login).subscribe(user=>this.user=user);
  }

}
