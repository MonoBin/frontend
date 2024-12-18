import { Component } from '@angular/core';
import {MatAnchor} from "@angular/material/button";

@Component({
  selector: 'app-login',
  standalone: true,
    imports: [
        MatAnchor
    ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

}
