import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

export type ContactStatus = 'activo' | 'inactivo' | 'ausente';

export interface Contact {
  id: number;
  name: string;
  email: string;
  status: ContactStatus;
  favorite: boolean;
}

@Component({
  selector: 'app-contact-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact-card.html',
  styleUrl: './contact-card.css',
})
export class ContactCardComponent {
  @Input({ required: true }) contact!: Contact;
  @Output() favoriteToggled = new EventEmitter<number>();
  @Output() statusToggled = new EventEmitter<number>();

  onFavoriteClick(): void {
    this.favoriteToggled.emit(this.contact.id);
  }

  onStatusClick(): void {
    this.statusToggled.emit(this.contact.id);
  }
}
