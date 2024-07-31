import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import {} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list'
import {MatSidenavModule} from '@angular/material/sidenav'
import { RouterOutlet, RouterLink , Router} from '@angular/router';
import {MatRippleModule} from '@angular/material/core';


@Component({
  selector: 'app-home-screen',
  standalone: true,
  imports: [MatRippleModule,RouterOutlet, RouterLink, MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule],
  templateUrl: './home-screen.component.html',
  styleUrl: './home-screen.component.css'
})
export class HomeScreenComponent {
  constructor(private route: Router){

  }
  //I want to create router links towards new components

  goToHome(path: string){
    this.route.navigate([path])
  }

  testing(){
    alert("button is working")
  }

}
