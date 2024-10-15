import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-interest-signup',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './interest-signup.component.html',
  styleUrl: './interest-signup.component.css',
})
export class InterestSignupComponent implements OnInit, AfterViewInit {
  constructor(private renderer: Renderer2) {
    const signed_up = localStorage.getItem('signed_up');
    if (signed_up && (JSON.parse(signed_up) as boolean)) {
      this.Set_Signed_Up(true);
      return;
    }
    this.Set_Signed_Up(false);
  }

  title = 'name-generator';

  @ViewChild('canvas') canvas_ref!: ElementRef<HTMLCanvasElement>;

  ctx!: CanvasRenderingContext2D;
  effect: Effect;

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.Canvas.Initialize();
  }

  Canvas = {
    Initialize: () => {
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
      this.gradient = this.ctx.createLinearGradient(
        0,
        0,
        this.canvas_ref.nativeElement.width,
        this.canvas_ref.nativeElement.height
      );
      this.gradient.addColorStop(0, '#251719');
      this.gradient.addColorStop(0.25, '#2E294E');
      this.gradient.addColorStop(0.5, '#1B998B');
      this.gradient.addColorStop(0.75, '#D7263D');
      this.gradient.addColorStop(1, '#FFFFFF');
      this.ctx.fillStyle = IS_Signed_Up ? this.gradient : '#D7263D';
      this.ctx.strokeStyle = IS_Signed_Up ? this.gradient : '#D7263D';
      this.effect = new Effect(this.canvas_ref.nativeElement);
      console.log(this.effect);
      this.Canvas.Animate();
    },
    Animate: () => {
      this.ctx.clearRect(
        0,
        0,
        this.canvas_ref.nativeElement.width,
        this.canvas_ref.nativeElement.height
      );
      this.effect.handle_particles(this.ctx);
      this.effect.handle_words(this.ctx);
      requestAnimationFrame(this.Canvas.Animate);
    },
  };

  gradient: CanvasGradient;

  Controls = {
    First_Name: {
      Value: <string>null,
      IS_Valid: <boolean>true,
    },
    Last_Name: {
      Value: <string>null,
      IS_Valid: <boolean>true,
    },
    Email: {
      Value: <string>null,
      IS_Valid: <boolean>true,
    },
    Company_Name: {
      Value: <string>null,
      IS_Valid: <boolean>true,
    },
    Validate: (control: 'First' | 'Last' | 'Email' | 'Company_Name') => {
      switch (control) {
        case 'First':
          this.Controls.First_Name.IS_Valid =
            !!this.Controls.First_Name.Value &&
            this.Controls.First_Name.Value.length >= 2;
          break;
        case 'Last':
          this.Controls.Last_Name.IS_Valid =
            !!this.Controls.Last_Name.Value &&
            this.Controls.Last_Name.Value.length >= 2;
          break;
        case 'Email':
          {
            const email_regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
            this.Controls.Email.IS_Valid =
              !!this.Controls.Email.Value &&
              this.Controls.Email.Value.length >= 2 &&
              !!this.Controls.Email.Value.match(email_regex);
          }
          break;
        case 'Company_Name':
          this.Controls.Company_Name.IS_Valid =
            !!this.Controls.Company_Name.Value &&
            this.Controls.Company_Name.Value.length >= 3;
          break;
      }
    },
  };

  IS_Signed_Up: boolean;

  Submit() {
    console.log(this.Controls.First_Name);
    console.log(this.Controls.Last_Name);
    console.log(this.Controls.Email);
    console.log(this.Controls.Company_Name);
    this.Controls.Validate('First');
    this.Controls.Validate('Last');
    this.Controls.Validate('Email');
    this.Controls.Validate('Company_Name');
    if (
      !this.Controls.First_Name.IS_Valid ||
      !this.Controls.Last_Name.IS_Valid ||
      !this.Controls.Email.IS_Valid ||
      !this.Controls.Company_Name.IS_Valid
    ) {
      return;
    }
    this.Sign_Up_Successful();
  }

  Sign_Up_Successful() {
    this.Set_Signed_Up(true);
    let audio = new Audio('vault_closing.wav');
    console.log(audio);
    audio.play();
    setTimeout(() => {
      audio.src = 'vault_closed.wav';
      audio.pause();
      audio.play();
      setTimeout(() => {
        audio.src = 'vault_locking.wav';
        audio.pause();
        audio.play();
      }, 500);
    }, 1000);
  }

  Set_Signed_Up(signed_up: boolean) {
    IS_Signed_Up = signed_up;
    this.IS_Signed_Up = signed_up;
    localStorage.setItem('signed_up', JSON.stringify(signed_up));
    if (!this.ctx) {
      return;
    }
    this.ctx.fillStyle = IS_Signed_Up ? this.gradient : '#D7263D';
  }

  // Controls = new FormGroup({
  //   Name: new FormGroup({
  //     First: new FormControl('', {nonNullable: true, validators: () => {

  //     }}),
  //     Last: new FormControl('', {nonNullable: true})
  //   }),
  //   Email: new FormControl('', {nonNullable: true}),
  //   Company_Name: new FormControl('', {nonNullable: true}),
  // })

  // Submit() {
  //   console.log(this.Controls.controls.Name.controls.First.value)
  //   console.log(this.Controls.controls.Name.controls.Last.value)
  //   console.log(this.Controls.controls.Email.value)
  //   console.log(this.Controls.controls.Company_Name.value)
  // }
}

class Effect {
  constructor(canvas: HTMLCanvasElement) {
    console.log(canvas.width, canvas.height);
    this.canvas = canvas;
    this.width = this.canvas.width;
    this.height = this.canvas.height;
    this.particles = [];
    this.particle_count = 40;
    this.words = [];
    this.word_count = 50;
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
    this.particles.forEach((particle, index) => {
      particle.draw(ctx);
      for (let i = 0; i < this.particles.length; i++) {
        if (index === i) {
          continue;
        }
        if (
          Math.hypot(
            Math.abs(particle.x - this.particles[i].x),
            Math.abs(particle.y - this.particles[i].y)
          ) <
          particle.radius * 10
        ) {
          ctx.beginPath();
          ctx.moveTo(particle.x, particle.y);
          ctx.lineTo(this.particles[i].x, this.particles[i].y);
          ctx.stroke();
        }
      }
      particle.update();
    });
  }

  create_words() {
    this.words = Array.from({ length: this.word_count }, () => new Word(this));
  }

  handle_words(ctx: CanvasRenderingContext2D) {
    this.words.forEach((word) => {
      word.draw(ctx);
      word.update();
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

class Particle {
  constructor(effect: Effect) {
    this.effect = effect;
    this.radius = 10;
    this.x =
      this.radius + Math.random() * (this.effect.width - this.radius * 2);
    this.y =
      this.radius + Math.random() * (this.effect.height - this.radius * 2);
    this.vx = Math.random() * 1.5;
    this.vy = Math.random() * 1.5;
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

class Word {
  constructor(effect: Effect) {
    this.effect = effect;
    this.x = Math.random() * effect.width;
    this.y = Math.random() * effect.height;
    this.vx = Math.random() * 1.25;
    this.vy = Math.random() * 1.25;
    this.size = Math.random() * 10 + 16;
    this.word = this.choices[Math.floor(Math.random() * this.choices.length)];
  }

  draw(ctx: CanvasRenderingContext2D) {
    //console.log(this.word);
    // ctx.fillStyle = 'crimson';
    ctx.font = `${this.size}px Arial`;
    ctx.fillText(this.word[IS_Signed_Up ? 1 : 0], this.x, this.y);
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

  word: word_choice;
  private choices = <word_choice[]>[
    ['Insecurity', 'Security'],
    ['Panic', 'Relief'],
    ['No Piece of Mind', 'Piece of Mind'],
    ['Hackers', 'Defenders'],
    ['Data Breach', 'Data Security'],
    ['Financial Loss', 'Financial Gain'],
    ['Reputation Damage', 'Reputation Safety'],
    ['Loss of Trust', 'Increased Trust'],
    ['Exposure of Trade Secrets', 'Security of Trade Secrets'],
    ['Non-Compliance', 'Compliance'],
  ];
}

type word_choice = [string, string];

let IS_Signed_Up: boolean;
