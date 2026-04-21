import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Contact, ContactStatus } from '../contact-card/contact-card';
import { ContactStatusLabelPipe } from '../../pipes/contact-status-label.pipe';

@Component({
  selector: 'app-contact-detail',
  standalone: true,
  imports: [ContactStatusLabelPipe],
  templateUrl: './contact-detail.html',
  styleUrl: './contact-detail.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactDetailComponent {
  @Input({ required: true }) contact!: Contact;

  readonly statusClass: Record<ContactStatus, string> = {
    activo: 'status-active',
    inactivo: 'status-inactive',
    ausente: 'status-away',
  };
}