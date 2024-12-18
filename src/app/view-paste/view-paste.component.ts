import { Component } from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {MatCardModule} from '@angular/material/card';
import {FooterComponent} from "../footer/footer.component";

@Component({
  selector: 'app-view-paste',
  standalone: true,
  imports: [
    MatCardModule,
    RouterOutlet,
    FooterComponent
  ],
  templateUrl: './view-paste.component.html',
  styleUrl: './view-paste.component.css'
})

export class ViewPasteComponent {}
