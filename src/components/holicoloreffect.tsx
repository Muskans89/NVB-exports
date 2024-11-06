
import React, { useEffect, useRef } from 'react';

const HoliCursorEffect: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const particlesRef = useRef<Particle[]>([]);

    // Define the properties for each particle
    interface Particle {
        x: number;
        y: number;
        size: number;
        color: string;
        speedX: number;
        speedY: number;
        alpha: number;
    }

    // Array of colors to use for the particles
    const colors = ["#FF4500", "#FF6347", "#FFD700", "#32CD32", "#1E90FF", "#9400D3"];

    // Function to create a new particle at the cursor's position
    const createParticle = (x: number, y: number): Particle => {
        const angle = Math.random() * 2 * Math.PI; // Random direction for each particle
        const speed = Math.random() * 0.5 + 0.1;   // Slow speed for trailing effect

        return {
            x,
            y,
            size: Math.random() * 3 + 1,           // Random size for particles
            color: colors[Math.floor(Math.random() * colors.length)], // Random color
            speedX: Math.cos(angle) * speed,       // Horizontal speed component
            speedY: Math.sin(angle) * speed,       // Vertical speed component
            alpha: 1,                              // Initial opacity
        };
    };

    // Animation loop to update and draw particles
    const animateParticles = (ctx: CanvasRenderingContext2D) => {
        // Clear the canvas
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

        // Remove particles that are no longer visible
        particlesRef.current = particlesRef.current.filter(particle => particle.alpha > 0);

        // Update and draw each particle
        particlesRef.current.forEach(particle => {
            particle.x += particle.speedX;
            particle.y += particle.speedY;
            particle.alpha -= 0.005;    // Very slow fade out for longer trails

            ctx.globalAlpha = particle.alpha;
            ctx.fillStyle = particle.color;
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            ctx.fill();
            ctx.globalAlpha = 1;
        });

        requestAnimationFrame(() => animateParticles(ctx));
    };

    // Function to handle mouse movement and create particles at cursor position
    const handleMouseMove = (e: MouseEvent) => {
        const canvas = canvasRef.current;
        if (canvas) {
            for (let i = 0; i < 5; i++) { // Fewer particles for a subtle trailing effect
                particlesRef.current.push(createParticle(e.clientX, e.clientY));
            }
        }
    };

    // Effect to initialize the canvas and event listeners
    useEffect(() => {
        const canvas = canvasRef.current;
        if (canvas) {
            const ctx = canvas.getContext("2d");
            if (ctx) {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;

                window.addEventListener("mousemove", handleMouseMove);
                animateParticles(ctx);

                // Cleanup function
                return () => {
                    window.removeEventListener("mousemove", handleMouseMove);
                };
            }
        }
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                pointerEvents: 'none',
                zIndex: 1000,
            }}
        ></canvas>
    );
};

export default HoliCursorEffect;
