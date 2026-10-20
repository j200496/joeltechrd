import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppComponent } from '../app.component';
import NavbarComponent from '../navbar/navbar.component';
import { HomeComponent } from "../home/home.component";

@Component({
  selector: 'app-main',
  imports: [RouterOutlet, NavbarComponent,HomeComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
