import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  SiReact,
  SiTypescript,
  SiNodedotjs,
  SiNextdotjs,
  SiTailwindcss,
  SiFigma,
  SiAdobexd,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiSketch,
  SiMongodb,
  SiPostgresql,
  SiDocker,
  SiGit
} from 'react-icons/si';

const skillIcons: Record<string, JSX.Element> = {
  'React': <SiReact className="text-blue-500 mr-2" />,
  'TypeScript': <SiTypescript className="text-blue-700 mr-2" />,
  'Node.js': <SiNodedotjs className="text-green-600 mr-2" />,
  'Next.js': <SiNextdotjs className="text-gray-800 mr-2" />,
  'Tailwind CSS': <SiTailwindcss className="text-cyan-500 mr-2" />,
  'Figma': <SiFigma className="text-pink-500 mr-2" />,
  'Adobe XD': <SiAdobexd className="text-pink-600 mr-2" />,
  'Photoshop': <SiAdobephotoshop className="text-blue-400 mr-2" />,
  'Illustrator': <SiAdobeillustrator className="text-yellow-500 mr-2" />,
  'Sketch': <SiSketch className="text-yellow-400 mr-2" />,
  'MongoDB': <SiMongodb className="text-green-700 mr-2" />,
  'PostgreSQL': <SiPostgresql className="text-blue-800 mr-2" />,
  'Docker': <SiDocker className="text-blue-500 mr-2" />,
  'Git': <SiGit className="text-orange-600 mr-2" />,
};

const About = () => {
  const skills = [
    'React', 'TypeScript', 'Node.js', 'Next.js', 'Tailwind CSS',
    'Figma', 'Adobe XD', 'Photoshop', 'Illustrator', 'Sketch',
    'MongoDB', 'PostgreSQL', 'Docker', 'Git'
  ];

  const stats = [
    { number: '10+', label: 'Projects Completed' },
    { number: '10+', label: 'Happy Clients' },
    { number: '1+', label: 'Years Experience' },
    { number: '100%', label: 'Client Satisfaction' }
  ];

  return (
    <section
      id="about"
      className="py-20"
      style={{
        background: 'linear-gradient(135deg, #f0f4ff 0%, #f8fafc 100%)', // Contact.tsx uses this gradient
      }}
    >
      <style>
        {`
          .about-bounce {
            animation: about-bounce 2.2s infinite cubic-bezier(.4,0,.2,1);
          }
          @keyframes about-bounce {
            0%, 100% { transform: translateY(0);}
            50% { transform: translateY(-10px);}
          }
          .about-glow {
            box-shadow: 0 0 16px 2px #818cf8, 0 0 32px 8px #a5b4fc33;
          }
        `}
      </style>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-purple-600 to-pink-500 mb-6 drop-shadow-lg tracking-tight animate-gradient-x">
                About DesignCraft
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
                <p>
                  We are a passionate team of <span className="font-semibold text-blue-600">web developers</span> and <span className="font-semibold text-purple-600">UI/UX designers</span> dedicated to creating 
                  exceptional digital experiences. With years of experience in the industry, we've helped 
                  businesses of all sizes achieve their digital goals.
                </p>
                <p>
                  Our approach combines <span className="font-semibold text-blue-500">cutting-edge technology</span> with <span className="font-semibold text-purple-500">user-centered design</span> principles 
                  to deliver solutions that not only look great but also perform exceptionally well. 
                  We believe in the power of <span className="font-semibold text-pink-500">collaboration</span> and work closely with our clients to bring 
                  their visions to life.
                </p>
                <p>
                  Whether you're a startup looking to establish your digital presence or an established 
                  company seeking to modernize your systems, we have the expertise and creativity to 
                  make it happen.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Our Skills & Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 border-0 shadow about-bounce flex items-center"
                    style={{ animationDelay: `${index * 0.07}s` }}
                  >
                    {skillIcons[skill] || null}
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center p-6 border-0 shadow-lg bg-white/90 backdrop-blur about-glow hover:scale-105 transition-transform duration-200">
                  <CardContent className="p-0">
                    <div className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-2 drop-shadow">
                      {stat.number}
                    </div>
                    <div className="text-gray-700 font-medium">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="p-8 border-0 shadow-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white about-glow hover:scale-105 transition-transform duration-200">
              <CardContent className="p-0 text-center">
                <h3 className="text-2xl font-bold mb-4 tracking-tight">Ready to Start Your Project?</h3>
                <p className="mb-6 opacity-90 text-lg">
                  Let's discuss how we can help bring your ideas to life with our expertise 
                  in web development and UI/UX design.
                </p>
                <a
                  href="#contact"
                  className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-bold shadow-lg hover:bg-blue-50 transition-colors duration-200 tracking-wide"
                >
                  Get In Touch
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
