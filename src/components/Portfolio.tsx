import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Star, Heart, Rocket, Code, Palette, Smile, Globe, Send } from 'lucide-react';
import React, { useRef, useEffect, useState } from 'react';

const Portfolio = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      category: 'Web Development',
      description: 'Modern e-commerce solution with React, Node.js, and Stripe integration.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'SaaS Dashboard',
      category: 'UI/UX Design',
      description: 'Clean and intuitive dashboard design for a B2B SaaS application.',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&h=300&fit=crop',
      tags: ['Figma', 'React', 'TypeScript', 'Charts'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Portfolio Website',
      category: 'Web Development',
      description: 'Responsive portfolio website for a creative agency with smooth animations.',
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=500&h=300&fit=crop',
      tags: ['React', 'Tailwind', 'Framer Motion', 'Responsive'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Mobile App Design',
      category: 'UI/UX Design',
      description: 'User-centered design for a fitness tracking mobile application.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&h=300&fit=crop',
      tags: ['Figma', 'Prototyping', 'User Research', 'Mobile'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Learning Management System',
      category: 'Web Development',
      description: 'Comprehensive LMS with video streaming, quizzes, and progress tracking.',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop',
      tags: ['React', 'Video.js', 'PostgreSQL', 'Authentication'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Brand Identity System',
      category: 'UI/UX Design',
      description: 'Complete brand identity and design system for a tech startup.',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500&h=300&fit=crop',
      tags: ['Branding', 'Design System', 'Guidelines', 'Assets'],
      liveUrl: '#',
      githubUrl: '#'
    }
  ];

  // Carousel logic for infinite horizontal scroll
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Duplicate the projects to create a seamless infinite loop
  const images = [...projects, ...projects];

  useEffect(() => {
    if (!carouselRef.current) return;
    let animationFrame: number;
    let running = true;

    // Use the current scrollLeft as the starting point
    let scrollLeft = carouselRef.current.scrollLeft;

    // Use a very small scrollSpeed for ultra-smooth movement
    const scrollSpeed = 1.5; // px per frame

    function animate() {
      if (!carouselRef.current) return;
      if (!isHovered) {
        scrollLeft += scrollSpeed;
        const maxScroll = carouselRef.current.scrollWidth / 2;
        if (scrollLeft >= maxScroll) {
          scrollLeft -= maxScroll;
        }
        carouselRef.current.scrollLeft = scrollLeft;
      } else {
        scrollLeft = carouselRef.current.scrollLeft;
      }
      animationFrame = requestAnimationFrame(animate);
    }

    animationFrame = requestAnimationFrame(animate);

    return () => {
      running = false;
      cancelAnimationFrame(animationFrame);
    };
  }, [isHovered, images.length]);

  const floatingIcons = [Star, Heart, Rocket, Code, Palette, Smile, Globe, Send];

  function getRandomFloatStyle(index: number) {
    const top = Math.random() * 80 + 5; // 5% - 85%
    const left = Math.random() * 90; // 0% - 90%
    const size = Math.random() * 32 + 32; // 32px - 64px
    const opacity = Math.random() * 0.18 + 0.10; // 0.10 - 0.28
    const duration = (Math.random() * 6 + 8).toFixed(1); // 8s - 14s
    const delay = (Math.random() * 6).toFixed(1); // 0s - 6s
    const floatAnim = Math.random() > 0.5 ? 'floatY' : 'floatX';
    const colorArr = [
      'text-blue-300', 'text-purple-300', 'text-pink-300', 'text-indigo-200', 'text-fuchsia-200'
    ];
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
      filter: 'blur(0.5px) drop-shadow(0 0 8px #a5b4fc)',
    };
  }

  return (
    <section
      id="portfolio"
      className="py-20"
      style={{
        background: 'linear-gradient(135deg, #f0f4ff 0%, #f8fafc 100%)',
      }}
    >
      {/* Floating icons background */}
      <style>
        {`
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
        `}
      </style>
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      >
        {Array.from({ length: 12 }).map((_, i) => {
          const Icon = floatingIcons[i % floatingIcons.length];
          const colorArr = [
            'text-blue-300', 'text-purple-300', 'text-pink-300', 'text-indigo-200', 'text-fuchsia-200'
          ];
          const color = colorArr[i % colorArr.length];
          return (
            <Icon
              key={i}
              style={getRandomFloatStyle(i)}
              className={color}
            />
          );
        })}
      </div>
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Portfolio
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover some of our recent projects that showcase our expertise in web development and UI/UX design.
          </p>
        </div>
        <style>
          {`
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
              width: 100%;
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
            .portfolio-tags {
              display: flex;
              flex-wrap: wrap;
              gap: 0.5rem;
              margin-bottom: 0.75rem;
            }
            .portfolio-tag {
              background: rgba(255,255,255,0.15);
              color: #fff;
              padding: 0.25rem 0.75rem;
              border-radius: 9999px;
              font-size: 0.75rem;
              font-weight: 500;
              letter-spacing: 0.02em;
            }
            .portfolio-actions {
              display: flex;
              gap: 0.75rem;
              margin-top: 1rem;
            }
            @media (max-width: 1024px) {
              .portfolio-card { min-width: 260px; max-width: 320px; }
              .portfolio-img { height: 140px; }
              .portfolio-overlay { padding: 1rem 1rem 1rem 1rem; }
            }
          `}
        </style>
        <div
          className="carousel-viewport"
          ref={carouselRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="carousel-track">
            {images.map((project, idx) => (
              <div className="portfolio-card group" key={idx}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="portfolio-img"
                  draggable={false}
                />
                <div className="portfolio-overlay">
                  <span className="text-sm font-medium text-blue-300 mb-1">{project.category}</span>
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-sm mb-3">{project.description}</p>
                  <div className="portfolio-tags">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="portfolio-tag">{tag}</span>
                    ))}
                  </div>
                  <div className="portfolio-actions">
                    <Button size="sm" variant="secondary" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                    <Button size="sm" variant="secondary" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  </div>
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
