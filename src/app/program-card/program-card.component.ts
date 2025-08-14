import { CommonModule } from '@angular/common';
import { Component, computed, input, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-program-card',
  templateUrl: './program-card.component.html',
  styleUrls: ['./program-card.component.scss'],
  imports: [CommonModule],
})
export class ProgramCardComponent {
  title = input<string>('');
  image = input<string>('assets/default.jpg');
  badge = input<string>('');

  get backgroundStyle() {
    return this.image
      ? `url(${this.image})`
      : 'linear-gradient(135deg, #1a1a1a, #0d0d0d)';
  }
}
