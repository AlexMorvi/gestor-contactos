import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-contact-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact-card.html',
  styleUrl: './contact-card.css',
})
export class ContactCardComponent {
  @Input() contact?: {
    id: number;
    name: string;
    email: string;
    status: string;
    favorite: boolean;
  };
}
