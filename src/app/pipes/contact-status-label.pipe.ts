import { Pipe, PipeTransform } from '@angular/core';
import { ContactStatus } from '../components/contact-card/contact-card';

@Pipe({
  name: 'contactStatusLabel',
})
export class ContactStatusLabelPipe implements PipeTransform {
  transform(status: ContactStatus): string {
    const labelByStatus: Record<ContactStatus, string> = {
      activo: 'Activo',
      inactivo: 'Inactivo',
      ausente: 'Ausente',
    };

    return labelByStatus[status] ?? status;
  }
}
