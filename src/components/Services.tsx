import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Palette, Settings, Users, Star, Heart, Globe, Rocket } from 'lucide-react';

const floatKeyframes = `
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
@keyframes fadeUp {
  0% { opacity: 0; transform: translateY(30px);}
  100% { opacity: 1; transform: translateY(0);}
}
`;

const floatingIcons = [Code, Palette, Settings, Users, Star, Heart, Globe, Rocket];

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

const Services = () => {
  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies like React, TypeScript, and Node.js.',
      features: ['Responsive Design', 'Performance Optimization', 'SEO Friendly', 'Cross-browser Compatibility']
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive user interfaces that provide exceptional user experiences and drive conversions.',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Visual Design']
    },
    {
      icon: Users,
      title: 'Ongoing Support',
      description: 'Continuous maintenance, updates, and support to keep your digital products running smoothly.',
      features: ['Bug Fixes', 'Feature Updates', 'Security Patches', '24/7 Monitoring']
    }
  ];

  return (
    <section
      id="services"
      className="py-20 min-h-screen"
      style={{
        background: 'linear-gradient(135deg, #f0f4ff 0%, #f8fafc 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <style>{floatKeyframes}</style>
      {/* Floating icons background */}
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
        {Array.from({ length: 10 }).map((_, i) => {
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
      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="text-center mb-16"
          style={{
            animation: 'fadeUp 1s cubic-bezier(.4,0,.2,1) both'
          }}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-purple-600 to-pink-500 mb-4 drop-shadow-lg tracking-tight">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We offer comprehensive digital solutions to help your business thrive in the digital landscape.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {services.map((service, index) => (
            <Card
              key={index}
              className="hover:shadow-2xl hover:scale-105 transition-all duration-300 border-0 shadow-md flex flex-col h-full w-full max-w-md bg-white/90 backdrop-blur"
              style={{ transition: 'transform 0.2s cubic-bezier(.4,0,.2,1)' }}
            >
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                  <service.icon className="h-8 w-8 text-white drop-shadow" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 flex-1 flex flex-col">
                <CardDescription className="text-gray-600 text-center">
                  {service.description}
                </CardDescription>
                <ul className="space-y-2 mt-auto">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
