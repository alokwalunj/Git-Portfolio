import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { DevText } from './components/DevText';
import { TechStack } from './components/TechStack';
import { Projects } from './components/Projects';
import { Footer } from './components/Footer';
import { Loader } from './components/Loader';
import { Analytics } from "@vercel/analytics/react";


export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <Loader onLoadingComplete={() => setIsLoading(false)} />
      <AnimatePresence>
        {!isLoading && (
          <motion.div
            className="bg-black min-h-screen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
          >
            <Navbar />
            <main className="space-y-0">
              <Hero />
              <DevText />
              <TechStack />
              <Projects />
            </main>
            <Footer />
            <Analytics />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}