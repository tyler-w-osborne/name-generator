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
    'M10',
    '30',
    'H30',
    'V10',
    'M90',
    '30',
    'H70',
    'V10',
    'M90',
    '70',
    'H70',
    'V90',
    'M10',
    '70',
    'H30',
    'V90',
    'M40',
    '10',
    'V30',
    'L50 40',
    'L60 30',
    'V10',
    'M90',
    '40',
    'H70',
    'L60 50',
    'L70 60',
    'H90',
    // next try
  ].join(' ');

  rivets: rivet[] = [
    // { radius: 4, x: 20, y: 20 },
    // { radius: 4, x: 80, y: 20 },
    // { radius: 4, x: 80, y: 80 },
    // { radius: 4, x: 20, y: 80 },

    { radius: 4, x: 50, y: 25 },
    { radius: 4, x: 75, y: 50 },
    { radius: 4, x: 50, y: 75 },
    { radius: 4, x: 25, y: 50 },
  ];

  path_2: string = [
    'M10',
    '30',
    'H30',
    'V10',
    'M90',
    '30',
    'H70',
    'V10',
    'M90',
    '70',
    'H70',
    'V90',
    'M10',
    '70',
    'H30',
    'V90',
    'M40',
    '10',
    'V30',
    'L50 40',
    'L60 30',
    'V10',
    'M90',
    '40',
    'H70',
    'L60 50',
    'L70 60',
    'H90',
    'M40',
    '90',
    'V70',
    'L50 60',
    'L60 70',
    'V90',
    'M10',
    '40',
    'H30',
    'L40 50',
    'L30 60',
    'H10',
  ].join(' ');

  path_3: string = [
    'M35 20',
    'H40',
    'V10',
    'H60',
    'V20',
    'H65',
    'M80 35',
    'V40',
    'H90',
    'V60',
    'H80',
    'V65',
    'M35 80',
    'H40',
    'V90',
    'H60',
    'V80',
    'H65',
    'M20 35',
    'V40',
    'H10',
    'V60',
    'H20',
    'V65',

    'M65 20',
    'L70 15',
    'L85 30',
    'L80 35',

    'M80 65',
    'L85 70',
    'L70 85',
    'L65 80',

    'M35 80',
    'L30 85',
    'L15 70',
    'L20 65',

    'M20 35',
    'L15 30',
    'L30 15',
    'L35 20',
    // 'L65 80',
    // 'M30 20', 'H40', 'V10', 'H60', 'V20',
    // 'M30 20', 'H40', 'V10', 'H60', 'V20',
    // 'H70', 'L80 15', 'L90 20'
  ].join(' ');

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

  path_4: string = [
    'M10',
    '30',
    'H30',
    'V10',
    'M90,30 H70 V10',
    'M90',
    '70',
    'H70',
    'V90',
    'M10',
    '70',
    'H30',
    'V90',
    'M40,10 V30 L50,40 L60,30 V10',
    'M90,40 H70 L50,60 L30,40 H10',
    'M10,60 H90',
    // 'M40,60 V70 H45 V90 M60,60 V70 H55 V90',
    'M40,90 V80 L50,70 L60,80 V90',
  ].join(' ');

  rivets_4: rivet[] = [
    { radius: 2, x: 35, y: 15 },
    { radius: 4, x: 80, y: 20 },
    { radius: 4, x: 80, y: 80 },
    { radius: 4, x: 20, y: 80 },

    { radius: 4, x: 50, y: 25 },
    { radius: 4, x: 75, y: 50 },
    { radius: 4, x: 50, y: 75 },
    { radius: 4, x: 25, y: 50 },
  ];

  path_5: string = [
    'M20,30 H30 V20',
    'M90,20 V30 H100',
    'M100,90 H90 V100',
    'M20,90 H30 V100',

    'M40,20 V40 L60,60 L80,40 V20',
    'M20,40 L60,80 L100,40',
    'M20,80 H100',
    'M50,100 V90 L60,85 L70,90 V100',

    'M20,50 L45,74 H20 V50',
    'M100,50 V74 H75 L100,50',
    // 'M10',
    // '30',
    // 'H30',
    // 'V10',
    // 'M90,30 H70 V10',
    // 'M90',
    // '70',
    // 'H70',
    // 'V90',
    // 'M10',
    // '70',
    // 'H30',
    // 'V90',
    // 'M40,10 V30 L50,40 L60,30 V10',
    // 'M90,40 H70 L50,60 L30,40 H10',
    // 'M10,60 H90',
    // 'M40,60 V70 H45 V90 M60,60 V70 H55 V90',
    // 'M40,90 V80 L50,70 L60,80 V90',
  ].join(' ');

  path_5_vault = [
    // 'M40,20 Q50,20 50,10 V0 H70 V10 Q70,20 80,20',
    // 'M100,40 Q100,50 110,50 H120 V70 H110 Q100,70 100,80',
    // 'M80,100 Q70,100 70,110 V120 H50 V110 Q50,100 40,100',
    // 'M20,80 Q20,70 10,70 H0 V50 H10 Q20,50 20,40',

    // 'M80,20 Q90,15 90,10',
    // 'M90,10 L110,30 L105,30 Q100,30 100,40',
    'M50,0 H70 V15 Q70,20 75,20 H90',
    'L0,0',
  ].join(' ');

  rivets_5: rivet[] = [
    { radius: 1.5, x: 25, y: 25 },
    { radius: 1.5, x: 95, y: 25 },
    { radius: 1.5, x: 95, y: 95 },
    { radius: 1.5, x: 25, y: 95 },
    { radius: 1.5, x: 25, y: 95 },
    // { radius: 4, x: 80, y: 20 },
    // { radius: 4, x: 80, y: 80 },
    // { radius: 4, x: 20, y: 80 },

    // { radius: 4, x: 50, y: 25 },
    // { radius: 4, x: 75, y: 50 },
    // { radius: 4, x: 50, y: 75 },
    // { radius: 4, x: 25, y: 50 },
  ];

  generated_grid(step: number, max: number): string {
    const grid = <string[]>[];
    for (let i = 0; i < max; i = i + step) {
      grid.push(`M0,${i} H${max}`, `M${i},0 V${max}`);
    }
    return grid.join(' ');
  }

  SEVEN = {
    path_vault_door: [
      'M40,10 H80 L110,40 V80 L80,110 H40 L10,80 V40 L40,10',
      // 'M6.25,6.25 H12.5',
    ].join(' '),
    path_vault: [
      `M50,10 H70 
      Q70,30 90,20 L100,30 
      Q90,50 110,50 V70 
      Q90,70 100,90 L90,100 
      Q70,90 70,110 H50 
      Q50,90 30,100 L20,90 
      Q30,70 10,70 V50
      Q30,50 20,30 L30,20
      Q50,30 50,10
      `,
      // line to center from sphere 1
      // 'M75,20 L60,60',
    ].join(''),
    path_network: [
      'M50,50 V60 L60,70 V80',
      'M60,50 V60 L70,70 V80',
      'M70,50 V60 L80,70 V80',
    ].join(' '),
    helper_dots: <rivet[]>[
      {radius: 2, x: 70, y: 30},
      {radius: 2, x: 90, y: 50},
      {radius: 2, x: 90, y: 70},
      {radius: 2, x: 70, y: 90},
      {radius: 2, x: 50, y: 90},
      {radius: 2, x: 30, y: 70},
      {radius: 2, x: 30, y: 50},
      {radius: 2, x: 50, y: 30},

      {radius: 3, x: 60, y: 60},

    ],
    rivets: <rivet[]>[
      {radius: 4, x: 40, y: 15},
      {radius: 4, x: 80, y: 15},
      {radius: 4, x: 105, y: 40},
      {radius: 4, x: 105, y: 80},
      {radius: 4, x: 80, y: 105},
      {radius: 4, x: 40, y: 105},
      {radius: 4, x: 15, y: 80},
      {radius: 4, x: 15, y: 40},
      

    ],
    rivets_2: <rivet[]>[
      {radius: 4, x: 42.5, y: 15},
      {radius: 4, x: 77.5, y: 15},
      {radius: 4, x: 102.5, y: 40},
      {radius: 4, x: 102.5, y: 75},
      {radius: 4, x: 77.5, y: 100},
      {radius: 4, x: 42.5, y: 105},
      {radius: 4, x: 15, y: 80},
      {radius: 4, x: 15, y: 42.5},
      

    ],
  };

  EIGHT = {
    path_vault_door: [
      'M40,10 H80 L110,40 V80 L80,110 H40 L10,80 V40 L40,10',
      // 'M6.25,6.25 H12.5',
    ].join(' '),
    path_vault: [
      `M50,10 H70 
      Q70,30 90,20 L100,30 
      Q90,50 110,50 V70 
      Q90,70 100,90 L90,100 
      Q70,90 70,110 H50 
      Q50,90 30,100 L20,90 
      Q30,70 10,70 V50
      Q30,50 20,30 L30,20
      Q50,30 50,10
      `,
    ].join(''),
    path_network: [
      'M50,50 V60 L60,70 V80',
      'M60,50 V60 L70,70 V80',
      'M70,50 V60 L80,70 V80',
    ].join(' '),
    helper_dots: <rivet[]>[
      {radius: 2, x: 70, y: 30},
      {radius: 2, x: 90, y: 50},
      {radius: 2, x: 90, y: 70},
      {radius: 2, x: 70, y: 90},
      {radius: 2, x: 50, y: 90},
      {radius: 2, x: 30, y: 70},
      {radius: 2, x: 30, y: 50},
      {radius: 2, x: 50, y: 30},

      {radius: 3, x: 60, y: 60},

    ],
    rivets: <rivet[]>[
      {radius: 4, x: 40, y: 15},
      {radius: 4, x: 80, y: 15},
      {radius: 4, x: 105, y: 40},
      {radius: 4, x: 105, y: 80},
      {radius: 4, x: 80, y: 105},
      {radius: 4, x: 40, y: 105},
      {radius: 4, x: 15, y: 80},
      {radius: 4, x: 15, y: 40},
      

    ],
    rivets_2: <rivet[]>[
      {radius: 4, x: 42.5, y: 15},
      {radius: 4, x: 77.5, y: 15},
      {radius: 4, x: 102.5, y: 40},
      {radius: 4, x: 102.5, y: 75},
      {radius: 4, x: 77.5, y: 100},
      {radius: 4, x: 42.5, y: 105},
      {radius: 4, x: 15, y: 80},
      {radius: 4, x: 15, y: 42.5},
      

    ],
  };

}

interface rivet {
  radius: number;
  x: number;
  y: number;
}
