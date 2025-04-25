import { Component,ViewEncapsulation  } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-home',
  imports: [
    MatToolbarModule,
    MatButtonModule,
    RouterModule,
    MatMenuModule,
    MatIconModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  encapsulation: ViewEncapsulation.None 
})
export class HomeComponent {

}
