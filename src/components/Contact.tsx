import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Phone, MapPin, Clock, Heart, Star, Smile, Send, Globe, User } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import React from 'react';

const bounceKeyframes = `
@keyframes bounce {
  0%, 100% { transform: translateY(0) scale(1);}
  10% { transform: translateY(-10px) scale(1.1);}
  20% { transform: translateY(-20px) scale(1.15);}
  30% { transform: translateY(-15px) scale(1.1);}
  50% { transform: translateY(0) scale(1);}
  70% { transform: translateY(-7px) scale(1.05);}
  80% { transform: translateY(0) scale(1);}
}
@keyframes fadeUp {
  0% { opacity: 0; transform: translateY(30px);}
  100% { opacity: 1; transform: translateY(0);}
}
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
`;

const floatingIcons = [
  Mail, Phone, MapPin, Clock, Heart, Star, Smile, Send, Globe, User
];

function getRandomBounceStyle(index: number) {
  const delay = (Math.random() * 1.5 + index * 0.2).toFixed(2);
  const direction = Math.random() > 0.5 ? 'alternate' : 'alternate-reverse';
  return {
    animation: `bounce 2s ${direction} infinite`,
    animationDelay: `${delay}s`,
    boxShadow: '0 0 16px 4px rgba(99,102,241,0.25), 0 0 32px 8px rgba(139,92,246,0.15)',
    filter: 'drop-shadow(0 0 8px #818cf8)',
  } as React.CSSProperties;
}

function getRandomFloatStyle(index: number) {
  // Randomize position, size, opacity, animation duration/delay
  const top = Math.random() * 80 + 5; // 5% - 85%
  const left = Math.random() * 90; // 0% - 90%
  const size = Math.random() * 32 + 32; // 32px - 64px
  const opacity = Math.random() * 0.25 + 0.10; // 0.10 - 0.35
  const duration = (Math.random() * 6 + 8).toFixed(1); // 8s - 14s
  const delay = (Math.random() * 6).toFixed(1); // 0s - 6s
  const floatAnim = Math.random() > 0.5 ? 'floatY' : 'floatX';
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

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      console.log('Submitting contact form:', formData);

      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: formData
      });

      if (error) {
        throw error;
      }

      console.log('Email sent successfully:', data);

      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours.",
      });

      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error: any) {
      console.error('Error sending email:', error);
      toast({
        title: "Error sending message",
        description: "Please try again later or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      details: 'aaronrthomas88@gmail.com',
      link: 'mailto:aaronrthomas88@gmail.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      details: '+91 7034670789',
      link: 'tel:+917034670789'
    },
    {
      icon: MapPin,
      title: 'Location',
      details: 'Thiruvananthapuram, Kerala, India',
      link: '#'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: 'Mon-Fri: 10AM-!2AM PST',
      link: '#'
    }
  ];

  return (
    <section
      id="contact"
      className="py-20 min-h-screen"
      style={{
        background: 'linear-gradient(135deg, #f0f4ff 0%, #f8fafc 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <style>{bounceKeyframes}</style>
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
        {Array.from({ length: 12 }).map((_, i) => {
          const Icon = floatingIcons[i % floatingIcons.length];
          return (
            <Icon
              key={i}
              style={getRandomFloatStyle(i)}
              className="text-blue-400"
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
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to start your next project? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Let's Talk About Your Project</h3>
              <p className="text-gray-600 mb-8">
                Whether you need a complete website overhaul, a new web application, or just want to improve your user experience, we're here to help. Our team is ready to discuss your ideas and provide expert guidance.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <Card
                  key={index}
                  className="border-0 shadow-md hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105 bg-white/90 backdrop-blur"
                  style={{ transition: 'transform 0.2s cubic-bezier(.4,0,.2,1)' }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div
                        className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={getRandomBounceStyle(index)}
                      >
                        <info.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">{info.title}</h4>
                        {info.link && info.link !== '#' ? (
                          <a
                            href={info.link}
                            className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                          >
                            {info.details}
                          </a>
                        ) : (
                          <p className="text-gray-600">{info.details}</p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;