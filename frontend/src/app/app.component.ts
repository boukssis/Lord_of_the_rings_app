import { Component } from '@angular/core';
import { Spinkit } from 'ng-http-loader';
import { user } from './shared/models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Frontend app';
  spinnerStyle = Spinkit;

// ===================== !!! Only for test purposes !!! ==================== \\
user:user={
  name:'bhome',
  email:'bhome4@gmail.com',
  roles:['SA']
}
  constructor(){
    localStorage.setItem('user',JSON.stringify(this.user))
  }

}
