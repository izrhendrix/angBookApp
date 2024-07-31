import { Component } from '@angular/core';
import { RouterOutlet, RouterLink , Router} from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatIconModule} from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { FormGroup, FormControl, Validators, FormBuilder, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, MatToolbarModule, MatButtonModule, MatIconModule, MatCardModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule],
  //brought the homepage in via into and passing it to the parent 
  //component
  //template:``,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {

}
