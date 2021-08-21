import { Component, OnInit } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { FormsModule } from '@angular/forms';
import { AuthService } from "../shared/services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
email:string =''
password:string =''

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }
onclick(){
  console.log(this.email+this.password)
}

}
