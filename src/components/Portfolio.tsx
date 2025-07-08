import { Star, Heart, Rocket, Code, Palette, Smile, Globe, Send } from 'lucide-react';
import React, { useRef, useEffect, useState } from 'react';

const Portfolio = () => {
  const projects =[
  {
    title: 'Canteen App',
    category: 'Product Design',
    description: 'A user-friendly app designed to streamline food ordering and reduce queues in school and college canteens.',
    image: '/cp.webp',
  },
  {
    title: 'Crowd Management',
    category: 'UX Research',
    description: 'An intelligent system to manage and navigate large crowds efficiently, ensuring safety and better flow at events.',
    image: '/cw.webp',
  },
  {
    title: 'Emotional Intelligence',
    category: 'Behavioral Design',
    description: 'A toolkit to help children and young adults understand, express, and manage emotions through gamified learning.',
    image: '/ei.webp',
  },
  {
    title: 'Electronic Repair',
    category: 'Hands-on Learning',
    description: 'A practical workshop that teaches students how to troubleshoot and repair basic electronic devices.',
    image: '/er.webp',
  },
  {
    title: 'Inspiration Station',
    category: 'Creative Thinking',
    description: 'An interactive exhibit space where students brainstorm, prototype, and share innovative ideas freely.',
    image: '/is.webp',
  }
];

  const images = [...projects, ...projects]; // Clone for seamless looping
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
  if (!carouselRef.current) return;

  let scrollLeft = carouselRef.current.scrollLeft || 0;
  const scrollSpeed = 1.5;
  let animationFrame: number;

  const animate = () => {
    if (!carouselRef.current) return;

    // Update scrollLeft even when hovered, just don’t apply it
    scrollLeft += scrollSpeed;
    const maxScroll = carouselRef.current.scrollWidth / 2;
    if (scrollLeft >= maxScroll) scrollLeft = 0;

    if (!isHovered) {
      carouselRef.current.scrollLeft = scrollLeft;
    }

    animationFrame = requestAnimationFrame(animate);
  };

  animationFrame = requestAnimationFrame(animate);
  return () => cancelAnimationFrame(animationFrame);
}, [isHovered]);


  const floatingIcons = [Star, Heart, Rocket, Code, Palette, Smile, Globe, Send];

  const getRandomFloatStyle = (index: number) => {
    const top = Math.random() * 80 + 5;
    const left = Math.random() * 90;
    const size = Math.random() * 32 + 32;
    const opacity = Math.random() * 0.18 + 0.10;
    const duration = (Math.random() * 6 + 8).toFixed(1);
    const delay = (Math.random() * 6).toFixed(1);
    const floatAnim = Math.random() > 0.5 ? 'floatY' : 'floatX';
    const colorArr = ['text-blue-300', 'text-purple-300', 'text-pink-300', 'text-indigo-200', 'text-fuchsia-200'];
    const color = colorArr[index % colorArr.length];
    return {
      position: 'absolute' as const,
      top: `${top}%`,
      left: `${left}%`,
      width: `${size}px`,
      height: `${size}px`,
      opacity,
      zIndex: 0,
      pointerEvents: 'none' as const,
      animation: `${floatAnim} ${duration}s ease-in-out ${delay}s infinite`,
      filter: 'blur(0.5px) drop-shadow(0 0 8px #a5b4fc)'
    };
  };

  return (
    <section id="portfolio" className="py-20 relative" style={{
      background: 'linear-gradient(135deg, #f0f4ff 0%, #f8fafc 100%)',
    }}>
      <style>{`
        @keyframes floatY {
          0% { transform: translateY(0);}
          50% { transform: translateY(-40px);}
          100% { transform: translateY(0);}
        }
        @keyframes floatX {
          0% { transform: translateX(0);}
          50% { transform: translateX(30px);}
          100% { transform: translateX(0);}
        }
        .carousel-track {
          display: flex;
          gap: 2rem;
          width: max-content;
          align-items: stretch;
        }
        .carousel-viewport {
          overflow-x: hidden;
          width: 100%;
          padding-bottom: 2rem;
          cursor: grab;
        }
        .portfolio-card {
          position: relative;
          border-radius: 1.5rem;
          overflow: hidden;
          box-shadow: 0 2px 16px 0 rgba(0,0,0,0.06);
          background: #fff;
          min-width: 320px;
          max-width: 400px;
          transition: transform 0.3s, box-shadow 0.3s;
          cursor: pointer;
          flex-shrink: 0;
        }
        .portfolio-card:hover {
          transform: scale(1.03) translateY(-6px);
          box-shadow: 0 8px 32px 0 rgba(99,102,241,0.12);
          z-index: 2;
        }
        .portfolio-img {
          width: 100%;
          height: 220px;
          object-fit: cover;
          border-radius: 1.5rem 1.5rem 0 0;
          transition: filter 0.3s;
        }
        .portfolio-card:hover .portfolio-img {
          filter: brightness(0.7) blur(1px);
        }
        .portfolio-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg,rgba(30,41,59,0.0) 40%,rgba(30,41,59,0.85) 100%);
          opacity: 0;
          transition: opacity 0.3s;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          align-items: flex-start;
          padding: 2rem 1.5rem 1.5rem 1.5rem;
          color: #fff;
          pointer-events: none;
          border-radius: 1.5rem;
        }
        .portfolio-card:hover .portfolio-overlay {
          opacity: 1;
          pointer-events: auto;
        }
        @media (max-width: 1024px) {
          .portfolio-card { min-width: 260px; max-width: 320px; }
          .portfolio-img { height: 140px; }
          .portfolio-overlay { padding: 1rem; }
        }
      `}</style>

      {/* Floating icons */}
      <div aria-hidden="true" className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        {Array.from({ length: 12 }).map((_, i) => {
          const Icon = floatingIcons[i % floatingIcons.length];
          return <Icon key={i} style={getRandomFloatStyle(i)} className="absolute" />;
        })}
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Gallery</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            <span className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 mb-4 block drop-shadow-sm">
              “Smiles, splashes, and silly moments!”
            </span>
            Peek into our world of giggles, games, and growing together.
          </p>
        </div>

        {/* Carousel */}
        <div
          className="carousel-viewport"
          ref={carouselRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="carousel-track">
            {images.map((project, idx) => (
              <div className="portfolio-card group" key={idx}>
                <img src={project.image} alt={project.title} className="portfolio-img" draggable={false} />
                <div className="portfolio-overlay">
                  <span className="text-sm font-medium text-blue-300 mb-1">{project.category}</span>
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-sm mb-3">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
