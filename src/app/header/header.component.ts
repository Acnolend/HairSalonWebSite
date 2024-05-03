import {Component, OnInit} from '@angular/core';
import { LoggedUserService } from "../services/logged-user.service";
import { AuthService} from "../services/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  userData: { name: string | null, email: string | null } | null = null;

  constructor(public loggedUserService: LoggedUserService, private authService: AuthService) {}

  ngOnInit() {
    // Suscribirse a los cambios en el estado de autenticación
    this.loggedUserService.getLoggedUser.subscribe(isAuthenticated => {
      if (isAuthenticated) {
        // Si el usuario está autenticado, obtener y asignar sus datos
        this.authService.getCurrentUserDataFromFirestore().then(userData => {
          // Verificar que userData no sea null o undefined antes de asignarlo
          if (userData) {
            this.userData = userData;
          } else {
            console.error("Los datos del usuario son nulos o indefinidos.");
          }
        }).catch(error => {
          console.error("Error al obtener datos del usuario:", error);
        });
      } else {
        // Si el usuario no está autenticado, establecer userData en null
        this.userData = null;
      }
    });
  }
}
