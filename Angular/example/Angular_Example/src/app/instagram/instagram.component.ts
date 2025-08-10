import { Component } from '@angular/core';

@Component({
  selector: 'app-instagram',
  standalone: true,
  imports: [],
  templateUrl: './instagram.component.html',
  styleUrl: './instagram.component.css'
})
export class InstagramComponent {
users=[
  { id: 1, name: 'Paresh', add: '345 Surat Bardoli' },
  { id: 2, name: 'Ravi', add: '12 Mumbai Andheri' },
  { id: 3, name: 'Amit', add: '89 Pune Shivaji Nagar' },
  { id: 4, name: 'Neha', add: '54 Delhi Karol Bagh' },
  { id: 5, name: 'Kiran', add: '76 Surat Adajan' },
  { id: 6, name: 'Priya', add: '45 Ahmedabad Maninagar' },
  { id: 7, name: 'Vikram', add: '101 Vadodara Alkapuri' },
  { id: 8, name: 'Sneha', add: '222 Surat Varachha' },
  { id: 9, name: 'Rajesh', add: '17 Nashik Panchavati' },
  { id: 10, name: 'Meena', add: '93 Jaipur Malviya Nagar' }
]
}
