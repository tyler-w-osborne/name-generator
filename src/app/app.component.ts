import {
  AfterViewInit,
  Component,
  ElementRef,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements AfterViewInit {
  constructor(private renderer: Renderer2) {}

  title = 'name-generator';

  @ViewChild('canvas') canvas_ref!: ElementRef<HTMLCanvasElement>;

  ctx!: CanvasRenderingContext2D;
  effect: Effect;

  ngAfterViewInit(): void {
    // this.canvas_ref.nativeElement.width = window.innerWidth;
    // this.canvas_ref.nativeElement.height = window.innerHeight;
    this.ctx = this.canvas_ref.nativeElement.getContext('2d');
    this.renderer.setStyle(
      this.canvas_ref.nativeElement,
      'width',
      `${window.innerWidth}px`
    );

    this.renderer.setStyle(
      this.canvas_ref.nativeElement,
      'height',
      `${window.innerHeight}px`
    );

    this.renderer.setStyle(
      this.canvas_ref.nativeElement,
      'backgroundColor',
      'black'
    );
    this.canvas_ref.nativeElement.width = window.innerWidth;
    this.canvas_ref.nativeElement.height = window.innerHeight;
    console.log(this.ctx);
    const gradient = this.ctx.createLinearGradient(
      0,
      0,
      this.canvas_ref.nativeElement.width,
      this.canvas_ref.nativeElement.height
    );
    gradient.addColorStop(0, 'white');
    gradient.addColorStop(0.5, 'magenta');
    gradient.addColorStop(1, 'blue');
    this.ctx.fillStyle = gradient;
    this.effect = new Effect(this.canvas_ref.nativeElement);
    console.log(this.effect);
    this.Canvas.Animate();
    // this.canvas_ref.nativeElement.style.backgroundColor = gradient
  }

  Canvas = {
    Animate: () => {
      this.ctx.clearRect(
        0,
        0,
        this.canvas_ref.nativeElement.width,
        this.canvas_ref.nativeElement.height
      );
      this.effect.handle_particles(this.ctx);
      this.effect.handle_words(this.ctx);

      // this.ctx.clearRect(
      //   0,
      //   0,
      //   this.canvas_ref.nativeElement.width,
      //   this.canvas_ref.nativeElement.height
      // );
      // this.ctx.fillRect(
      //   Math.floor(20 * Math.random()),
      //   Math.floor(20 * Math.random()),
      //   100,
      //   100
      // );
      requestAnimationFrame(this.Canvas.Animate);
    },
  };
}

class Particle {
  constructor(effect: Effect) {
    this.effect = effect;
    this.radius = 15;
    this.x =
      this.radius + Math.random() * (this.effect.width - this.radius * 2);
    this.y =
      this.radius + Math.random() * (this.effect.height - this.radius * 2);
    this.vx = 2;
    this.vy = 2;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = `hsl('${this.x}', 100%, 50%)`;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fill();
  }

  update() {
    this.x += this.vx;
    if (this.x + this.radius > this.effect.width) {
      this.vx *= -1;
    } else if (this.x - this.radius < 0) {
      this.vx *= -1;
    }
    this.y += this.vy;
    if (this.y + this.radius > this.effect.height) {
      this.vy *= -1;
    } else if (this.y - this.radius < 0) {
      this.vy *= -1;
    }
  }

  effect: Effect;
  radius: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
}

class Effect {
  constructor(canvas: HTMLCanvasElement) {
    console.log(canvas.width, canvas.height);
    this.canvas = canvas;
    this.width = this.canvas.width;
    this.height = this.canvas.height;
    this.particles = [];
    this.particle_count = 10;
    this.words = [];
    this.word_count = 10;
    this.create_particles();
    this.create_words();
  }

  create_particles() {
    this.particles = Array.from(
      { length: this.particle_count },
      () => new Particle(this)
    );
  }

  handle_particles(ctx: CanvasRenderingContext2D) {
    this.particles.forEach((particle) => {
      particle.draw(ctx);
      particle.update();
    });
  }

  create_words() {
    this.words = Array.from({ length: this.word_count }, () => new Word(this));
  }

  handle_words(ctx: CanvasRenderingContext2D) {
    this.words.forEach((word) => {
      word.draw(ctx);
    });
  }

  canvas: HTMLCanvasElement;
  width: number;
  height: number;
  particles: Particle[];
  particle_count: number;

  words: Word[];
  word_count: number;
}

// class Particle {
//   constructor(effect: Effect) {
//     // this.width = Math.random() * .75 * 5
//   }
//   x: number;
//   y: number;
//   vx: number;
//   vy: number;
//   radius: number;

//   draw(ctx: CanvasRenderingContext2D) {
//     ctx.beginPath();
//     ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
//     this.vx = Math.random() * 1 - 0.5;
//     this.vy = Math.random() * 1 - 0.5;
//   }

//   update() {
//     this.x += 4;
//     this.y += 4;
//   }
// }

// class Effect {
//   constructor(canvas: HTMLCanvasElement) {
//     this.canvas = canvas;
//     this.width = this.canvas.width;
//     this.height = this.canvas.height;
//     this.particles = [];
//     this.particle_count = 200;
//     this.create_particles();
//   }

//   canvas: HTMLCanvasElement;
//   width: number;
//   height: number;
//   particles: Particle[];
//   particle_count: number;

//   create_particles() {
//     this.particles.push(
//       ...Array.from({ length: this.particle_count }, () => {
//         return new Particle(this);
//       })
//     );
//   }

//   handle_particles(ctx: CanvasRenderingContext2D) {
//     this.particles.forEach((particle) => {
//       particle.draw(ctx);
//       particle.update();
//     });
//   }
// }

class Word {
  constructor(effect: Effect) {
    this.x = Math.random() * effect.width;
    this.y = Math.random() * effect.height;
    this.word = this.choices[Math.floor(Math.random() * this.choices.length)];
  }

  draw(ctx: CanvasRenderingContext2D) {
    console.log(this.word);
    ctx.fillText(this.word, this.x, this.y);
  }

  update() {
    this.x += this.vx;
    if (this.x > this.effect.width) {
      this.vx *= -1;
    } else if (this.x < 0) {
      this.vx *= -1;
    }
    this.y += this.vy;
    if (this.y > this.effect.height) {
      this.vy *= -1;
    } else if (this.y < 0) {
      this.vy *= -1;
    }
  }

  effect: Effect;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;

  word: string;
  private choices = [
    'Insecurity',
    'Panic',
    'No Piece of Mind',
    'Hackers',
    'Data Breach',
    'Financial Loss',
  ];
}
