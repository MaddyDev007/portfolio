import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useIsMobile } from '@/hooks/use-mobile';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';

interface NavigationProps {
  currentSection: string;
  onSectionChange: (section: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentSection, onSectionChange }) => {
  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'resume', label: 'Resume' }, // Add Resume link here
    { id: 'contact', label: 'Contact' }
  ];
  const isMobile = useIsMobile();
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const handleSectionSelect = (section: string) => {
    onSectionChange(section);
    setIsSheetOpen(false); // Close sheet after selection
  };

  if (isMobile) {
    return (
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 p-4"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="max-w-6xl mx-auto flex justify-end">
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <motion.button
                className="p-3 bg-white/10 backdrop-blur-lg rounded-full border border-white/20 text-white"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Menu size={24} />
              </motion.button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-white/10 backdrop-blur-lg border-l-white/20 text-white p-6 w-[250px]">
              <div className="flex flex-col space-y-6 mt-10">
                {navItems.map((item) => (
                  <SheetClose asChild key={item.id}>
                    <motion.button
                      onClick={() => handleSectionSelect(item.id)}
                      className={`relative px-4 py-3 rounded-lg text-lg transition-colors duration-300 w-full text-left ${
                        currentSection === item.id
                          ? 'text-white bg-purple-600/80'
                          : 'text-white/80 hover:text-white hover:bg-white/10'
                      }`}
                      whileHover={{ x: 5 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {item.label}
                    </motion.button>
                  </SheetClose>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </motion.nav>
    );
  }

  return (
    <motion.nav 
      className="fixed top-0 left-0 right-0 z-50 p-6"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-6xl mx-auto flex justify-center">
        <div className="bg-white/10 backdrop-blur-lg rounded-full px-6 py-3 border border-white/20">
          <div className="flex space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => onSectionChange(item.id)}
                className={`relative px-4 py-2 rounded-full transition-colors duration-300 ${
                  currentSection === item.id
                    ? 'text-white'
                    : 'text-white/70 hover:text-white'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {currentSection === item.id && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
                    layoutId="activeNav" // Make sure layoutId is unique if multiple elements use it simultaneously.
                                        // For this case, it's fine as mobile and desktop navs are mutually exclusive.
                    transition={{ type: "spring", duration: 0.6 }}
                  />
                )}
                <span className="relative z-10 font-medium">{item.label}</span>
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
