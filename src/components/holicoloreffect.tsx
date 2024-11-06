import React, { useEffect, useRef } from 'react';

const HoliCursorEffect: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const particlesRef = useRef<Particle[]>([]);

    interface Particle {
        x: number;
        y: number;
        size: number;
        color: string;
        speedX: number;
        speedY: number;
        alpha: number;
    }

    const colors = ["#FF6347", "#FFD700", "#32CD32"]; // Fewer colors for a minimal look

    const createParticle = (x: number, y: number): Particle => {
        const angle = Math.random() * 2 * Math.PI;
        const speed = Math.random() * 0.3 + 0.1;  // Slower speed

        return {
            x,
            y,
            size: Math.random() * 2 + 0.5,         // Smaller particles
            color: colors[Math.floor(Math.random() * colors.length)],
            speedX: Math.cos(angle) * speed,
            speedY: Math.sin(angle) * speed,
            alpha: 0.8,                            // Slightly lower initial opacity
        };
    };

    const animateParticles = (ctx: CanvasRenderingContext2D) => {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        particlesRef.current = particlesRef.current.filter(particle => particle.alpha > 0);

        particlesRef.current.forEach(particle => {
            particle.x += particle.speedX;
            particle.y += particle.speedY;
            particle.alpha -= 0.01;    // Faster fade-out for a minimal effect

            ctx.globalAlpha = particle.alpha;
            ctx.fillStyle = particle.color;
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            ctx.fill();
            ctx.globalAlpha = 1;
        });

        requestAnimationFrame(() => animateParticles(ctx));
    };

    // Function to handle both mouse and touch movements
    const createParticlesAtPosition = (x: number, y: number) => {
        for (let i = 0; i < 3; i++) {
            particlesRef.current.push(createParticle(x, y));
        }
    };

    // Handles mouse movement
    const handleMouseMove = (e: MouseEvent) => {
        createParticlesAtPosition(e.clientX, e.clientY);
    };

    // Handles touch movement on mobile devices
    const handleTouchMove = (e: TouchEvent) => {
        if (e.touches.length > 0) {
            const touch = e.touches[0];
            createParticlesAtPosition(touch.clientX, touch.clientY);
        }
    };

    useEffect(() => {
        const canvas = canvasRef.current;
        if (canvas) {
            const ctx = canvas.getContext("2d");
            if (ctx) {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;

                // Event listeners for both desktop and mobile interactions
                window.addEventListener("mousemove", handleMouseMove);
                window.addEventListener("touchmove", handleTouchMove);
                animateParticles(ctx);

                // Cleanup function
                return () => {
                    window.removeEventListener("mousemove", handleMouseMove);
                    window.removeEventListener("touchmove", handleTouchMove);
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
