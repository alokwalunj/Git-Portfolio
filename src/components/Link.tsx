import { motion } from 'framer-motion';

interface LinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}

export function Link({ href, children, onClick }: LinkProps) {
  return (
    <motion.a 
      href={href}
      onClick={onClick}
      className="relative text-white/70 hover:text-white transition-colors text-sm tracking-wider group"
      whileHover="hover"
    >
      {children}
      <motion.span
        className="absolute -bottom-1 left-0 w-full h-[1px] bg-white origin-left"
        initial={{ scaleX: 0 }}
        variants={{
          hover: {
            scaleX: 1,
            transition: { duration: 0.3 }
          }
        }}
      />
    </motion.a>
  );
}