import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PublicNavbarComponent } from '../../components/public-navbar/public-navbar';
import { PublicFooterComponent } from '../../components/public-footer/public-footer';

@Component({
  selector: 'app-public-layout',
  standalone: true,
  imports: [RouterOutlet, PublicNavbarComponent, PublicFooterComponent],
  templateUrl: './public-layout.html'
})
export class PublicLayout {}
