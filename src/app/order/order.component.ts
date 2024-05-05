import { Component } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent {
    Preguntas: any[] = []
    
    ngOnInit(): void
    {
      this.loadFaqsSection();
    }

    loadFaqsSection(): void
    {
      fetch('../assets/json/order.json')
        .then(response => response.json())
        .then(data => {
          this.Preguntas = data.Preguntas;
        })
        .catch(error => console.error('Error al cargar el archivo Json:', error));
    }

    Clicked(event: Event): void{
      const target = event.currentTarget as HTMLElement;
      const div2 = target.querySelector('.main__div2--section');
      const span = target.querySelector('.main__span--section');
      if (div2 && span){
        div2.classList.toggle('main__div2--section-opened');
        span.classList.toggle('main__span--section-opened');
      }
    }
}
