import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/auth.service';
export class User {
  name!: String;
  email!: String;
}

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  UserProfile!: User;
  constructor(public authService: AuthService) {
    this.authService.profileUser().subscribe((data) => {
      console.log(data);
      this.UserProfile = data;
      // console.log(this.UserProfile);
    });
  }
  ngOnInit() { }

}
