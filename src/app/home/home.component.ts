import { Component } from '@angular/core';
import {MatAnchor} from "@angular/material/button";

@Component({
  selector: 'app-home',
  standalone: true,
    imports: [
        MatAnchor
    ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
