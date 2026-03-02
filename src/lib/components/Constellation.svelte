<script>
  import { onMount } from 'svelte';
  
  let canvas;
  
  class Particle {
    constructor(canvas) {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.vx = (Math.random() - 0.5) * 0.4;
      this.vy = (Math.random() - 0.5) * 0.4;
      this.radius = Math.random() * 1.5 + 0.5;
    }
    
    update(canvas) {
      this.x += this.vx;
      this.y += this.vy;
      
      if (this.x < 0 || this.x > canvas.width) this.vx = -this.vx;
      if (this.y < 0 || this.y > canvas.height) this.vy = -this.vy;
    }
    
    draw(ctx) {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
      ctx.fill();
    }
  }

  onMount(() => {
    const ctx = canvas.getContext('2d');
    let particles = [];
    const particleCount = typeof window !== 'undefined' && window.innerWidth < 768 ? 60 : 120;
    const maxDistance = 150;
    let animationFrameId;
    
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', resize);
    resize();
    
    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle(canvas));
    }
    
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let i = 0; i < particles.length; i++) {
        particles[i].update(canvas);
        particles[i].draw(ctx);
        
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < maxDistance) {
            ctx.beginPath();
            const opacity = 0.2 * (1 - distance / maxDistance);
            ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
            ctx.lineWidth = 0.8;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      
      animationFrameId = requestAnimationFrame(animate);
    }
    
    animate();
    
    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  });
</script>

<canvas
  bind:this={canvas}
  class="absolute inset-0 pointer-events-none w-full h-full z-[-40] opacity-80"
  class:light-invert={true} 
></canvas>

<style>
  :global(.light) .light-invert {
    filter: invert(1);
    opacity: 0.3;
  }
</style>
