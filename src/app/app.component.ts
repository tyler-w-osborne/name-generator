import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements AfterViewInit {
  title = 'name-generator';

  @ViewChild('canvas') canvas_ref: ElementRef<HTMLCanvasElement>;

  ctx: CanvasRenderingContext2D;

  ngAfterViewInit(): void {
    // this.canvas_ref.nativeElement.width = window.innerWidth;
    // this.canvas_ref.nativeElement.height = window.innerHeight;
    this.ctx = this.canvas_ref.nativeElement.getContext('2d');
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
    // this.canvas_ref.nativeElement.style.backgroundColor = gradient
  }

  animate() {
    this.ctx.clearRect(
      0,
      0,
      this.canvas_ref.nativeElement.width,
      this.canvas_ref.nativeElement.height
    );
    requestAnimationFrame(this.animate);
  }
}

class Particle {
  constructor() {
    // this.width = Math.random() * .75 * 5
  }
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;

  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    this.vx = Math.random() * 1 - 0.5;
    this.vy = Math.random() * 1 - 0.5;
  }
}

class Word {}
