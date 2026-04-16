import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  Contact,
  ContactCardComponent,
  ContactStatus,
} from '../contact-card/contact-card';

@Component({
  selector: 'app-contact-list',
  standalone: true,
  imports: [CommonModule, ContactCardComponent],
  templateUrl: './contact-list.html',
  styleUrl: './contact-list.css',
})
export class ContactListComponent {
  contacts: Contact[] = [
    {
      id: 1,
      name: 'Ana Gomez',
      email: 'ana@ejemplo.com',
      status: 'activo',
      favorite: false,
    },
    {
      id: 2,
      name: 'Carlos Ruiz',
      email: 'carlos@ejemplo.com',
      status: 'inactivo',
      favorite: true,
    },
    {
      id: 3,
      name: 'Laura Vega',
      email: 'laura@ejemplo.com',
      status: 'activo',
      favorite: false,
    },
    {
      id: 4,
      name: 'David Silva',
      email: 'david@ejemplo.com',
      status: 'ausente',
      favorite: false,
    },
    {
      id: 5,
      name: 'Elena Paz',
      email: 'elena@ejemplo.com',
      status: 'activo',
      favorite: true,
    },
  ];

  toggleFavorite(contactId: number): void {
    this.contacts = this.contacts.map((contact) =>
      contact.id === contactId
        ? { ...contact, favorite: !contact.favorite }
        : contact,
    );
  }

  toggleStatus(contactId: number): void {
    const nextStatus: Record<ContactStatus, ContactStatus> = {
      activo: 'ausente',
      ausente: 'inactivo',
      inactivo: 'activo',
    };

    this.contacts = this.contacts.map((contact) =>
      contact.id === contactId
        ? { ...contact, status: nextStatus[contact.status] }
        : contact,
    );
  }
}
