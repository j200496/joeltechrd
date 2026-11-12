import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import Swal from 'sweetalert2';
import { HomeComponent } from "../home/home.component";


@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterOutlet],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export default class NavbarComponent {

router = inject(Router);  
salir(){
  Swal.fire({
    title:'Salir',
    text: 'Seguro desea salir?',
    icon: 'question',
    showCancelButton: true,
    background: 'white',
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Si, deseo salir!"

  }).then((result)=>{
    if(result.isConfirmed){
    this.router.navigateByUrl('/login');
    }
  })
}
}
