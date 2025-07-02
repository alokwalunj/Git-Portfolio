import { useState, useEffect } from 'react';
import { Mail, Phone, Github, Linkedin, Twitter, ArrowUpRight } from 'lucide-react';

export function Footer() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const footer = document.getElementById('footer');
    if (footer) {
      observer.observe(footer);
    }

    return () => {
      if (footer) {
        observer.unobserve(footer);
      }
    };
  }, []);

  return (
    <footer id="footer" className="bg-black text-white py-12 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className={`transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          <h2 className="text-white/70 text-sm tracking-widest mb-8 md:mb-12">GET IN TOUCH —</h2>
          
          <div className="mb-12 md:mb-24">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">Let's work together</h3>
            <p className="text-white/70 mb-6 md:mb-8 max-w-md text-sm md:text-base">
              Have a project in mind? Looking to partner or work together? Feel free to reach out through email or phone.
            </p>
            <div className="flex flex-col gap-4">
              <a href="mailto:your.email@example.com" 
                 className="flex items-center gap-2 text-white/70 hover:text-white transition-colors group text-sm md:text-base">
                <Mail size={20} />
                <span>alokwalunj1717@gmail.com</span>
                <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity" size={16} />
              </a>
              <a href="tel:+1234567890" 
                 className="flex items-center gap-2 text-white/70 hover:text-white transition-colors group text-sm md:text-base">
                <Phone size={20} />
                <span>+1 (609) 721-8785</span>
                <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity" size={16} />
              </a>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center pt-8 md:pt-12 border-t border-white/10">
            <p className="text-white/50 text-sm mb-4 md:mb-0">© 2025 Alok Walunj. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="https://github.com/rpraneeth5225" target="_blank" rel="noopener noreferrer" 
                 className="text-white/50 hover:text-white transition-colors">
                <Github size={20} />
              </a>
              <a href="https://x.com/PraneethSays" target="_blank" rel="noopener noreferrer"
                 className="text-white/50 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://www.linkedin.com/in/praneeth-regonda/" target="_blank" rel="noopener noreferrer"
                 className="text-white/50 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}