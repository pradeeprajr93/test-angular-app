import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.paramMap
      .subscribe(
        params => {
          console.log(params.get('id'));
        }
      )
  }

  submit(){
    this.router.navigate(['/followers'], {
      queryParams: {
        pageNo: 1,
        order: 'asc'
      }
    });
  }

}
