import { Github, Linkedin, Twitter, Mail, Menu, X } from 'lucide-react';
import { Link } from './Link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    },
    open: {
      opacity: 1,
      height: "100vh",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    closed: {
      opacity: 0,
      y: 20,
      transition: { duration: 0.2 }
    },
    open: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.2 }
    }
  };

  const navLinks = [
    { href: "#home", label: "HOME" },
    { href: "#projects", label: "PROJECTS" },
    { href: "https://medium.com/@praneethregonda", label: "BLOG" },
  ];

  const socialLinks = [
    { href: "https://github.com/rpraneeth5225", icon: Github, label: "GitHub" },
    { href: "https://x.com/PraneethSays", icon: Twitter, label: "Twitter" },
    { href: "www.linkedin.com/in/praneeth-regonda", icon: Linkedin, label: "LinkedIn" },
    { href: "mailto:praneethregonda28@gmail.com", icon: Mail, label: "Email" }
  ];

  return (
    <motion.nav 
      className="fixed top-0 w-full p-4 md:p-6 flex justify-between items-center z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm -z-10" />

      {/* Desktop Navigation */}
      <div className="hidden md:flex gap-8">
        {navLinks.map(({ href, label }) => (
          <motion.div
            key={href}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href={href}>{label}</Link>
          </motion.div>
        ))}
      </div>

      {/* Desktop Social Icons */}
      <div className="hidden md:flex gap-6">
        {socialLinks.map(({ href, icon: Icon, label }) => (
          <motion.a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/70 hover:text-white transition-all duration-300"
            whileHover={{ 
              scale: 1.2,
              rotate: 360,
              transition: { duration: 0.3 }
            }}
            whileTap={{ scale: 0.9 }}
          >
            <Icon size={20} />
          </motion.a>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <motion.button 
        className="md:hidden text-white/70 hover:text-white transition-colors z-50"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        whileTap={{ scale: 0.95 }}
      >
        <AnimatePresence mode="wait">
          {isMenuOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -180, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 180, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <X size={24} />
            </motion.div>
          ) : (
            <motion.div
              key="menu"
              initial={{ rotate: 180, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -180, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Menu size={24} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-black md:hidden"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
          >
            <motion.div 
              className="flex flex-col items-center justify-center h-full gap-12 p-8"
              variants={itemVariants}
            >
              {navLinks.map(({ href, label }) => (
                <motion.div
                  key={href}
                  variants={itemVariants}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link href={href} onClick={() => setIsMenuOpen(false)}>
                    {label}
                  </Link>
                </motion.div>
              ))}
              
              <motion.div 
                className="flex gap-8 mt-8"
                variants={itemVariants}
              >
                {socialLinks.map(({ href, icon: Icon, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-white transition-all duration-300"
                    whileHover={{ 
                      scale: 1.2,
                      rotate: 360,
                      transition: { duration: 0.3 }
                    }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Icon size={24} />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}