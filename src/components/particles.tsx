import { useEffect, useRef } from "react";
const PARTICLE_SIZE = 2.5;
const NUM_PARTICLES = 150;
const MAX_DISTANCE = 50;

class Particle {
  x_pos: number;
  y_pos: number;
  x_velo: number;
  y_velo: number;
  size: number;
  color: string;
  constructor(width: number, height: number) {
    this.color = "gray";
    this.x_pos = Math.random() * width;
    this.y_pos = Math.random() * height;
    this.x_velo = (Math.random() - 0.5) * 3;
    this.y_velo = (Math.random() - 0.5) * 3;
    this.size = PARTICLE_SIZE;
  }
  draw(context: CanvasRenderingContext2D) {
    context.beginPath();
    context.arc(this.x_pos, this.y_pos, this.size, 0, 1, true);
    //context.rect(this.x_pos, this.y_pos, this.size, this.size);
    context.fillStyle = this.color;
    context.fill();
  }

  update(width: number, height: number) {
    this.x_pos += this.x_velo;
    this.y_pos += this.y_velo;
    if (this.x_pos - this.size <= 0 || this.x_pos + this.size >= width) {
      this.x_velo *= -1;
    }
    if (this.y_pos - this.size <= 0 || this.y_pos + this.size >= height) {
      this.y_velo *= -1;
    }
  }
}
export const ParticleCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
      }
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  useEffect(() => {
    const particles: Particle[] = [];
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    for (let i = 0; i < NUM_PARTICLES; i++) {
      particles.push(new Particle(canvas.width, canvas.height));
    }
    const update = () => {
      for (const particle1 of particles) {
        for (const particle2 of particles) {
          if (particle1 != particle2) {
            const dx = particle2.x_pos - particle1.x_pos;
            const dy = particle2.y_pos - particle1.y_pos;
            const distance = Math.sqrt(dx ** 2 + dy ** 2);

            if (distance < MAX_DISTANCE) {
              drawLine(
                particle1.x_pos,
                particle1.y_pos,
                particle2.x_pos,
                particle2.y_pos
              );
            }

            if (distance <= PARTICLE_SIZE) {
              const angle = Math.atan2(dy, dx);
              const sine = Math.sin(angle);
              const cosine = Math.cos(angle);

              const v1 = {
                x: particle1.x_velo * cosine + particle1.y_velo * sine,
                y: particle1.y_velo * cosine - particle1.x_velo * sine,
              };
              const v2 = {
                x: particle2.x_velo * cosine + particle2.y_velo * sine,
                y: particle2.y_velo * cosine - particle2.x_velo * sine,
              };

              const tempVx = v1.x;
              v1.x = v2.x;
              v2.x = tempVx;

              particle1.x_velo = v1.x * cosine - v1.y * sine;
              particle1.y_velo = v1.x * sine + v1.y * cosine;
              particle2.x_velo = v2.x * cosine - v2.y * sine;
              particle2.y_velo = v2.x * sine + v2.y * cosine;

              const overlap = PARTICLE_SIZE - distance;
              particle1.x_pos -= overlap * (dx / distance);
              particle1.y_pos -= overlap * (dy / distance);
              particle2.x_pos += overlap * (dx / distance);
              particle2.y_pos += overlap * (dy / distance);
            }
          }
        }
      }
      requestAnimationFrame(update);
    };

    const drawLine = (x1: number, y1: number, x2: number, y2: number) => {
      context.beginPath();
      context.moveTo(x1, y1);
      context.lineTo(x2, y2);
      context.strokeStyle = "rgba(210, 215, 211)";
      context.stroke();
    };

    const animate = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);
      for (const particle of particles) {
        particle.update(canvas.width, canvas.height);
        particle.draw(context);
      }
      requestAnimationFrame(animate);
    };
    animate();
    update();
  }, []);
  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 bg-primaryBg dark:bg-darkPrimaryBg z-[-1]"
    />
  );
};
