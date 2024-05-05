import { Component } from '@angular/core';
import { CarouselService } from "../services/carousel.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(public carouselService : CarouselService) {}
}
