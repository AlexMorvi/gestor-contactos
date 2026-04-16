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
      phone: '+34 600 111 101',
      city: 'Madrid',
      status: 'activo',
      favorite: false,
    },
    {
      id: 2,
      name: 'Carlos Ruiz',
      email: 'carlos@ejemplo.com',
      phone: '+34 600 222 202',
      city: 'Sevilla',
      status: 'inactivo',
      favorite: true,
    },
    {
      id: 3,
      name: 'Laura Vega',
      email: 'laura@ejemplo.com',
      phone: '+34 600 333 303',
      city: 'Valencia',
      status: 'activo',
      favorite: false,
    },
    {
      id: 4,
      name: 'David Silva',
      email: 'david@ejemplo.com',
      phone: '+34 600 444 404',
      city: 'Bilbao',
      status: 'ausente',
      favorite: false,
    },
    {
      id: 5,
      name: 'Elena Paz',
      email: 'elena@ejemplo.com',
      phone: '+34 600 555 505',
      city: 'Granada',
      status: 'activo',
      favorite: true,
    },
    {
      id: 6,
      name: 'Mario Torres',
      email: 'mario@ejemplo.com',
      phone: '+34 600 666 606',
      city: 'Malaga',
      status: 'inactivo',
      favorite: false,
    },
    {
      id: 7,
      name: 'Sofia Nunez',
      email: 'sofia@ejemplo.com',
      phone: '+34 600 777 707',
      city: 'Zaragoza',
      status: 'ausente',
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
