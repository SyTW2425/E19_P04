import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { User } from './models/user.model'
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MindHub';
  public user: User;

  constructor (){
    this.user = {
      username: 'airamhp', email : 'alu0101036700@ull.edu.es', isAdmin: true
    };
    console.log(this.user)
  }
}
