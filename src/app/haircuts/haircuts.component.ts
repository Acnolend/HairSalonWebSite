import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-haircuts',
  templateUrl: './haircuts.component.html',
  styleUrls: ['./haircuts.component.css']
})
export class HaircutsComponent implements OnInit {
  imagenes: any[] = [];

  ngOnInit(): void {
    this.loadHaircutsData();
  }

  loadHaircutsData(): void {
    fetch('../assets/json/haircuts.json')
      .then(response => response.json())
      .then(data => {
        this.imagenes = data.Imagenes;
      })
      .catch(error => console.error('Error al cargar el archivo JSON:', error));
  }
}
