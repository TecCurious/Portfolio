// components/Navbar.tsx
import React, { useState } from 'react';
import Link from 'next/link';
import { Mail, Menu, X } from 'lucide-react';
import ContactForm from './ContactForm';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showContact, setShowContact] = useState(false);

  return (
    <>
      <nav className="fixed top-0 w-full bg-gradient-to-t from-gray-950 to-gray-900  shadow-lg z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="text-white text-xl font-bold hover:text-blue-300 transition duration-300">
                Portfolio
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-4">
              <NavLink href="#education">Education</NavLink>
              <NavLink href="#experience">Experience</NavLink>
              <NavLink href="#projects">Projects</NavLink>
              <NavLink href="#skills">Skills</NavLink>
              <button
                onClick={() => setShowContact(true)}
                className="bg-gradient-to-r from-blue-600 to-purple-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition duration-300"
              >
                <Mail size={18} />
                <span>Contact</span>
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white hover:text-blue-300 transition duration-300"
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-gradient-to-r from-blue-900 to-purple-900">
              <MobileNavLink href="#education">Education</MobileNavLink>
              <MobileNavLink href="#experience">Experience</MobileNavLink>
              <MobileNavLink href="#projects">Projects</MobileNavLink>
              <MobileNavLink href="#skills">Skills</MobileNavLink>
              <button
                onClick={() => {
                  setShowContact(true);
                  setIsOpen(false);
                }}
                className="w-full text-left text-gray-300 hover:bg-blue-500 hover:text-white px-3 py-2 rounded-md text-base font-medium transition duration-300"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Contact Modal */}
      {showContact && <ContactForm onClose={() => setShowContact(false)} />}
    </>
  );
};

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children }) => (
  <Link
    href={href}
    className="text-gray-300 hover:text-white hover:bg-blue-600 px-3 py-2 rounded-md transition duration-300"
  >
    {children}
  </Link>
);

const MobileNavLink: React.FC<NavLinkProps> = ({ href, children }) => (
  <Link
    href={href}
    className="text-gray-300 hover:bg-blue-500 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition duration-300"
  >
    {children}
  </Link>
);

export default Navbar;