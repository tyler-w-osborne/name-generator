import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'logo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './logo.component.html',
  styleUrl: './logo.component.css',
})
export class LogoComponent {
  // Polygon = {
  //   Points_Set_1: <string>`100,10 150,190 50,190`,
  // }
  // Rivet_Bolts = [];
  rivets: rivet[] = [
    { radius: 5, x: 15, y: 15 },
    { radius: 5, x: 30, y: 30 },
    { radius: 5, x: 15, y: 45 },
  ];
}

interface rivet {
  radius: number;
  x: number;
  y: number;
}
