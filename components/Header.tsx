
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'nosotros', label: 'Nosotros' },
    { id: 'servicios', label: 'Servicios' },
    { id: 'equipo', label: 'Equipo' },
    { id: 'contacto', label: 'Contacto' },
];

interface HeaderProps {
    activeSection: string;
    isScrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ activeSection, isScrolled }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, sectionId: string) => {
        e.preventDefault();
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false);
    };

    const headerClasses = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isOpen ? 'bg-[#18181B]/90 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`;

    return (
        <header className={headerClasses}>
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <img src="/logo.png" alt="e-ngenieria logo" className="h-12 w-auto rounded-full" />

                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map(link => (
                            <a
                                key={link.id}
                                href={`#${link.id}`}
                                onClick={(e) => handleLinkClick(e, link.id)}
                                className={`font-medium text-white hover:text-[#FFE600] transition-colors duration-300 relative ${activeSection === link.id ? 'text-[#FFE600]' : ''}`}
                            >
                                {link.label}
                                {activeSection === link.id && (
                                    <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-[#FFE600]"></span>
                                )}
                            </a>
                        ))}
                    </div>

                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none"
                            aria-controls="mobile-menu"
                            aria-expanded={isOpen}
                            aria-label="Open main menu"
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu */}
            <div
                id="mobile-menu"
                className={`md:hidden bg-[#18181B] transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? 'max-h-96 border-t border-gray-800' : 'max-h-0'
                }`}
            >
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    {navLinks.map(link => (
                        <a
                            key={link.id}
                            href={`#${link.id}`}
                            onClick={(e) => handleLinkClick(e, link.id)}
                            className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                                activeSection === link.id ? 'bg-[#FFE600] text-black' : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                            }`}
                        >
                            {link.label}
                        </a>
                    ))}
                </div>
            </div>
        </header>
    );
};

export default Header;
