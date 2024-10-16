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
  path_1: string = [
    // 'M20', '10', 'V20', 'H10',
    // 'M80', '10', 'V20', 'H90',
    // 'M80', '90', 'V80', 'H90',
    // 'M10', '80', 'H20', 'V90',
    // 'M40', '10', 'V20', 'L50 30', 'L60 20', 'V10'
    // NEXT SECTION IS KINDA COOL
    // 'M10', '30', 'H30', 'V10',
    // 'M90', '30', 'H70', 'V10',
    // 'M90', '70', 'H70', 'V90',
    // 'M10', '70', 'H30', 'V90',
    // 'M40', '10', 'V20', 'L50 30', 'L60 20', 'V10',
    // 'M90', '40', 'H50', 'L50 30', 'L60 20', 'V10',
    // NEXT TRY
    'M10', '30', 'H30', 'V10',
    'M90', '30', 'H70', 'V10',
    'M90', '70', 'H70', 'V90',
    'M10', '70', 'H30', 'V90',
    'M40', '10', 'V30', 'L50 40', 'L60 30', 'V10',
    'M90', '40', 'H70', 'L60 50', 'L70 60', 'H90',
    // next try
  ].join(" ");

  rivets: rivet[] = [
    { radius: 4, x: 20, y: 20 },
    { radius: 4, x: 80, y: 20 },
    { radius: 4, x: 80, y: 80 },
    { radius: 4, x: 20, y: 80 },

    { radius: 4, x: 50, y: 25 },
    { radius: 4, x: 75, y: 50 },
    { radius: 4, x: 50, y: 75 },
    { radius: 4, x: 25, y: 50 },
  ];

  path_2: string = [
    'M10', '30', 'H30', 'V10',
    'M90', '30', 'H70', 'V10',
    'M90', '70', 'H70', 'V90',
    'M10', '70', 'H30', 'V90',
    'M40', '10', 'V30', 'L50 40', 'L60 30', 'V10',
    'M90', '40', 'H70', 'L60 50', 'L70 60', 'H90',
    'M40', '90', 'V70', 'L50 60', 'L60 70', 'V90',
    'M10', '40', 'H30', 'L40 50', 'L30 60', 'H10',
  ].join(" ");

  path_3: string = [
    'M30 20', 'H40', 'V10', 'H60', 'V20', 'H65',
    'M80 35', 'V40', 'H90', 'V60', 'H80', 'V65',
    'M30 80', 'H40', 'V90', 'H60', 'V80', 'H65',
    'M20 30', 'V40', 'H10', 'V60', 'H20', 'V70',

    'M65 20', 'L70 15', 'L85 30', 'L80 35',
    'M80 65', 'L85 70', 'L80 75',
    // 'M30 20', 'H40', 'V10', 'H60', 'V20',
    // 'M30 20', 'H40', 'V10', 'H60', 'V20',
    // 'H70', 'L80 15', 'L90 20'
  ].join(" ");

  rivets_2: rivet[] = [
    { radius: 4, x: 20, y: 20 },
    { radius: 4, x: 80, y: 20 },
    { radius: 4, x: 80, y: 80 },
    { radius: 4, x: 20, y: 80 },

    { radius: 4, x: 50, y: 25 },
    { radius: 4, x: 75, y: 50 },
    { radius: 4, x: 50, y: 75 },
    { radius: 4, x: 25, y: 50 },
  ];

}

interface rivet {
  radius: number;
  x: number;
  y: number;
}
